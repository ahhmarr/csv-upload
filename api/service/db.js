const elastic = require("elasticsearch");
const debug = require("debug")("error");
const index = "pipedrive";
const client = new elastic.Client({
  hosts: process.env.ES_HOST || "http://elastic:changeme@localhost:9200"
});
client.ping(
  {
    requestTimeout: 30000
  },
  function(error) {
    if (error) {
      debug(error);
      debug("elasticsearch cluster is down!");
    } else {
      debug("Everything is ok");
    }
  }
);
client.indices.create(
  {
    index
  },
  function(error, response, status) {}
);
module.exports = { client, index };
