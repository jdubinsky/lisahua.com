import express = require("express");
import path = require("path");
import SSM = require("aws-sdk/clients/secretsmanager");

const app = express();
const bucketName = process.env.BUCKET_NAME;
const secretId = process.env.PASSWORDS_SECRET_ID;
interface Secrets {
  [key: string]: string;
}
let secretsCache: Secrets = {};
let secretsLastRefreshedDate: Date | null = null;
const SECRETS_REFRESH_THRESH = 60 * 60 * 1000; // 1hr in ms

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

app.get("/*", (request: express.Request, response: express.Response) => {
  const indexPath = path.join(__dirname, "/index.html");
  return response.sendFile(indexPath);
});

export = app;
