#!/usr/bin/env node

const fs = require("fs");

const createFile = (data) => {

  const fileName = `${data.personalInfo[0].firstName.toLowerCase()}_${data.personalInfo[0].lastName.toLowerCase()}_data.json`;

  // fs.writeFile(`${__dirname}/userData/${fileName}`, JSON.stringify(data), { flag: "w" }, (err) => {
  //   if (err) {
  //     console.error(err, "createFile failed!");
  //   }
  // });

  try {
    fs.writeFile(`${__dirname}/userData/${fileName}`, JSON.stringify(data), { flag: "w" });
  } catch (err) {
    console.error(err, "createFile failed!");
  }

  return "Success!";
  
}

module.exports = { createFile };