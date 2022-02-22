#!/usr/bin/env node

const fs = require("fs");

const createFile = (data) => {

  const fileName = `${data.personalInfo[0].firstName.toLowerCase()}_${data.personalInfo[0].lastName.toLowerCase()}_data.json`;

  fs.writeFile(`${__dirname}/userData/${fileName}`, JSON.stringify(data), { flag: "w" }, (err) => {
    if (err) {
      console.error(err, "createFile failed!");
    }
  });
  
}

module.exports = { createFile };