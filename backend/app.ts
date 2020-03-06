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

app.use("/static", express.static(__dirname));

app.get("/", (response: express.Response) => {
  const indexPath = path.join(__dirname, "/index.html");
  return response.sendFile(indexPath);
});

app.get("/app.bundle.js", async (response: express.Response) => {
  const bundlePath = path.join(__dirname, "/app.bundle.js");
  return response.sendFile(bundlePath);
});

app.get("/*", async (request: express.Request, response: express.Response) => {
  const isImg = request.path.endsWith(".png");
  if (!isImg || !bucketName) {
    return response.sendStatus(404);
  }

  const imgFile = path.join(__dirname, request.path);
  return response.sendFile(imgFile);
});

export = app;
