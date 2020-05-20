import app = require("./app");

const binaryMimeTypes = [
  "binary/octet-stream",
  "font/eot",
  "font/opentype",
  "font/otf",
  "font/ttf",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "text/comma-separated-values",
  "text/plain",
  "text/text",
  "text/xml",
];

const port = process.env.APP_PORT;
const isInLambda = !!process.env.LAMBDA_TASK_ROOT;

if (isInLambda) {
  const serverlessExpress = require("aws-serverless-express");
  const server = serverlessExpress.createServer(app, null, binaryMimeTypes);
  exports.handler = (event: any, context: any) =>
    serverlessExpress.proxy(server, event, context);
} else {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}
