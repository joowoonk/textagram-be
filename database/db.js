const knex = require("knex");

require("dotenv").config();

const env = process.env.DB_ENV || "development";

const config = require("../knexfile");

const db = knex(config[env]);
module.exports = db;
