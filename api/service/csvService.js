const fs = require("fs");
const csv = require("csv-stream");
const contact = require("../models/contact");
const errorLog = require("debug")("error");
const debugLog = require("debug")("debug");
async function importCSVTODB({ path, name, type }) {
  let records = {
    columns: ["id", "name", "age", "address", "team"],
    enclosedChar: '"'
  };
  let csvStream = csv.createStream(records);
  let stream = fs.createReadStream(path).pipe(csvStream);
  let bulk = [];
  stream.on("data", data => {
    let { name, age, address, team } = data;
    name = name.toLowerCase();
    address = address.toLowerCase();
    team = team.toLowerCase();
    bulk.push({ name, age, address, team, createdAt: new Date() });
  });
  stream.on("error", error => {
    errorLog(error);
    throw error;
  });
  stream.on("end", done => {
    debugLog(`inserting ${bulk.length} records`);
    contact.bulk(bulk).then(() => {
      bulk = [];
    });
  });
  return stream;
}

module.exports = {
  importCSVTODB
};
