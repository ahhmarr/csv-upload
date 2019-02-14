const csvService = require("../service/csvService");
const contact = require("../models/contact");
const errorLog = require("debug")("error");
async function uploadContact(ctx) {
  try {
    let file = (ctx.request.files && ctx.request.files.file) || {};
    let { name, path, type } = file;
    if (type !== "text/csv") {
      throw `only csv file supported ${type} specified`;
    }
    if (!path || !name) {
      throw "file path or name not specified";
    }
    csvService.importCSVTODB({ path, name });

    ctx.body = {
      message: `uploading of csv ${name} initiated`
    };
  } catch (e) {
    errorLog(e);
    ctx.status = 500;
    ctx.body = {
      message: e
    };
  }
}
function transform(query = {}) {
  let results = [];
  let hits = (query && query.hits && query.hits.hits) || [];
  hits.map(hit => {
    let { name = "", age = "", address = "", team = "", createdAt = "" } =
      hit._source || {};
    results.push({
      id: hit._id,
      name,
      age,
      address,
      team,
      createdAt
    });
  });
  return results;
}
async function listContact(ctx) {
  try {
    let query = ctx.query.query || "";
    let limit = ctx.query.limit || 20;
    let results = await contact.search(query, limit);
    results = transform(results);
    ctx.body = {
      results
    };
  } catch (e) {
    errorLog(e);
    ctx.status = 500;
    ctx.body = {
      results: []
    };
  }
}
module.exports = {
  uploadContact,
  listContact
};
