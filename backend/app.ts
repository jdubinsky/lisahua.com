import express = require("express");
import path = require("path");
import S3 = require('aws-sdk/clients/s3');

const app = express();
const s3 = new S3();
const bucketName = process.env.BUCKET_NAME;

async function getStaticObject(key: string) {
  console.log("bucket", bucketName);
  if (!bucketName) {
    return;
  }

  const params: S3.Types.GetObjectRequest = {
    Bucket: bucketName,
    Key: key
  };
  console.log(params);

  return await s3.getObject(params).promise();
}

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (request: express.Request, response: express.Response) => {
  const indexPath = path.join(__dirname, "/index.html");
  return response.sendFile(indexPath);
});

app.get("/app.bundle.js", async (request: express.Request, response: express.Response) => {
  // const jsPath = path.join(__dirname, "/app.bundle.js");
  // return response.sendFile(jsPath);
  const keyPath = "app.bundle.js"
  const bundleResponse = await getStaticObject(keyPath);

  if (!(bundleResponse instanceof Error) && bundleResponse) {
    const { ContentLength: bundleLength, Body: bundle } = bundleResponse;
    console.log("1")
    response.writeHead(200, {
      "Content-Type": "application/javascript",
      "Content-Length": bundleLength
    });
    console.log("send")
    return response.end(bundle);
  }

  return response.sendStatus(404);
});

app.get("/*", async (request: express.Request, response: express.Response) => {
  const isImg = request.path.endsWith(".png");
  if (!isImg || !bucketName) {
    return response.sendStatus(404);
  }

  const keyPath = `images${request.path}`;
  const imgResponse = await getStaticObject(keyPath);
  console.log("imgResponse", imgResponse)

  if (!(imgResponse instanceof Error) && imgResponse) {
    const { ContentLength: imgLength, Body: imgData } = imgResponse;
    if (!imgData) {
      return response.sendStatus(404);
    }

    const img = Buffer.from(imgData.toString(), "base64");

    response.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": imgLength
    });
    return response.end(img);
  }

  return response.sendStatus(404);
});

export = app;
