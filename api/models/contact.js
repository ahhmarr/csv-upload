const { client, index } = require("../service/db");
const type = "contacts";

const Schema = {
  name: { type: "keyword" },
  age: { type: "integer" },
  address: { type: "keyword" },
  team: { type: "keyword" },
  createdAt: { type: "date" }
};
client.indices.putMapping({
  index,
  type,
  body: {
    properties: Schema
  }
});
function create(data) {
  return client.index({
    index,
    type,
    body: data
  });
}
function bulk(arr) {
  let bulkArr = [];
  arr.map(obj => {
    bulkArr.push({
      index: {
        _index: index,
        _type: type
      }
    });
    bulkArr.push(obj);
  });
  return client.bulk({ body: bulkArr });
}
function search(query, size = 20) {
  const body = {
    size,
    query: {
      wildcard: {
        name: `*${query}*`
      }
    }
  };
  return client.search({ index, type, body });
}
const Contact = {
  create,
  bulk,
  search
};
module.exports = Contact;
