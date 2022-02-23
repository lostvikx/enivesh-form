#!/usr/bin/env node

const createCsvWriter = require('csv-writer').createArrayCsvWriter;

const createCsvFile = (data) => {
  
  const csvWriter = createCsvWriter({
    path: `${__dirname}/userData/data.csv`,
    header: []
  });

}

module.exports = { createCsvFile };