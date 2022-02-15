#!/usr/bin/env node

const express = require("express");

const app = express();

const HOST = "localhost";
const PORT = process.env.PORT | 8080;

app.use(express.json({
  limit: "1mb",
  type: "application/json"
}));

app.listen(PORT, HOST, () => console.log(`listening on http://${HOST}:${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/user-data", (req, res) => {
  console.log(req.body);
  res.json("Got the fucking data!");
});