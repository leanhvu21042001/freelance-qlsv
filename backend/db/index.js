const knex = require("knex");
const knexFile = require("../knexfile.js");
const environment = process.env.NODE_ENV || "development";

const db = knex(knexFile[environment]);

db.raw("SELECT 1")
  .then(() => {
    console.log("MYSQL connected");
  })
  .catch((e) => {
    console.log("MYSQL not connected");
    console.error(e);
  });

module.exports = db;
