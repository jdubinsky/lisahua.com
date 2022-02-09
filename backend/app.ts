import express = require("express");
import path = require("path");
import SSM = require("aws-sdk/clients/secretsmanager");
import S3 = require("aws-sdk/clients/s3");

const app = express();
const s3 = new S3();
const bucketName = process.env.BUCKET_NAME;
const secretId = process.env.PASSWORDS_SECRET_ID;
interface Secrets {
  [key: string]: string;
}
let secretsCache: Secrets = {};
let secretsLastRefreshedDate: Date | null = null;
const SECRETS_REFRESH_THRESH = 60 * 60 * 1000; // 1hr in ms
const FONT_CT_LOOKUP: { [key: string]: string } = {
  ttf: "font/ttf",
  woff: "font/woff",
};

const IS_DEV = process.env.NODE_ENV === "development";
if (IS_DEV) {
  const cors = require("cors");
  const c = cors();
  app.use(c);
  app.options("*", c);
}

async function getStaticObject(key: string) {
  if (!bucketName) {
    return;
  }

  const params: S3.Types.GetObjectRequest = {
    Bucket: bucketName,
    Key: key,
  };

  return await s3.getObject(params).promise();
}

async function getSecrets() {
  if (!secretId) {
    return {};
  }
  const currentDate = new Date();
  if (secretsLastRefreshedDate !== null) {
    const dateDiff = currentDate.getTime() - secretsLastRefreshedDate.getTime();
    if (
      Object.keys(secretsCache).length > 0 &&
      dateDiff < SECRETS_REFRESH_THRESH
    ) {
      return secretsCache;
    }
  }

  const client = new SSM({ region: "us-east-1" });
  let secretsResponse;
  try {
    secretsResponse = await client
      .getSecretValue({ SecretId: secretId })
      .promise();
  } catch (err) {
    console.log(err);
    return {};
  }

  const secretStr = secretsResponse.SecretString;
  if (secretStr === undefined) {
    return {};
  }

  secretsLastRefreshedDate = currentDate;
  secretsCache = JSON.parse(secretStr);
  return secretsCache;
}

app.use("/static", express.static(__dirname));
app.use(express.json());

app.get(
  "/app.bundle.js",
  async (request: express.Request, response: express.Response) => {
    const bundlePath = path.join(__dirname, "/app.bundle.js");
    return response.sendFile(bundlePath);
  }
);

app.get(
  "/*.png",
  async (request: express.Request, response: express.Response) => {
    const isImg = request.path.endsWith(".png");
    if (!isImg || !bucketName) {
      return response.sendStatus(404);
    }

    const imgFile = path.join(__dirname, request.path);
    return response.sendFile(imgFile);
  }
);

app.post(
  "/auth/:caseStudy",
  async (request: express.Request, response: express.Response) => {
    const caseStudy = request.params["caseStudy"];
    const passwordAttempt = request.body.password;
    const secrets = await getSecrets();
    const matchingSecret = secrets[`${caseStudy}_password`];

    if (matchingSecret === undefined) {
      return response.json({ authResult: false });
    }

    const authResult = passwordAttempt === matchingSecret;
    return response.json({ authResult });
  }
);

app.get(
  "/fonts/*",
  async (request: express.Request, response: express.Response) => {
    const pathSplit = request.path.split("/");
    if (pathSplit.length < 2) {
      return response.sendStatus(404);
    }

    const fontName = pathSplit[2];
    if (fontName.length === 0) {
      return response.sendStatus(404);
    }

    const fontType = fontName.split(".")[1];
    const fontContentType: string = FONT_CT_LOOKUP[fontType];
    const fontResponse = await getStaticObject(`fonts/${fontName}`);

    if (fontResponse === undefined || fontResponse.Body === undefined) {
      return response.sendStatus(404);
    }

    const fontBuffer = Buffer.from(fontResponse.Body.toString());
    response.contentType(fontContentType);
    response.header("Access-Control-Allow-Origin", "*");
    return response.send(fontBuffer);
  }
);

app.get("/*", (request: express.Request, response: express.Response) => {
  const indexPath = path.join(__dirname, "/index.html");
  return response.sendFile(indexPath);
});

export = app;
