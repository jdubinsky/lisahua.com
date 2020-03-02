import express = require("express");
import path = require("path");

let app = express();

app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (request: express.Request, response: express.Response) => {
  const indexPath = path.join(__dirname, "/index.html");
  return response.sendFile(indexPath);
});

app.get("/app.bundle.js", (request: express.Request, response: express.Response) => {
  const jsPath = path.join(__dirname, "/app.bundle.js");
  return response.sendFile(jsPath);
});

export = app;
