const knex = require("knex");

// const knexfile = require("../knexfile");
const env = process.env.DB_ENV || "development";
// const environment = process.env.DB_ENV || "development";
const config = require("../knexfile");

const db = knex(config[env]);
module.exports = db;
