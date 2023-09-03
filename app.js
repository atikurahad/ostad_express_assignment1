const express = require("express");
const app = express();
const router = require("./src/Routes/api");

app.use("/api", router);
console.log(router);
module.exports = app;
