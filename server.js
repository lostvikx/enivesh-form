#!/usr/bin/env node

const express = require("express");
const { createFile } = require("./apis/createFile.js");

const app = express();

app.use("/", express.static(__dirname + "/client/build"));

const HOST = "localhost";
const PORT = process.env.PORT || 8080;

app.use(express.json({
  limit: "1mb",
  type: "application/json"
}));

app.listen(PORT, HOST, () => console.log(`listening on http://${HOST}:${PORT}`));

app.post("/user-data", (req, res) => {

  const totalUserData = req.body;
  console.log(totalUserData);

  const message = createFile(totalUserData);
  console.log(message);

  res.json("Data saved in a JSON file 🎉");
});