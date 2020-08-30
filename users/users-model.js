const db = require("../database/db");

module.exports = {
  getUserById,
  getPostsByUserId,
};

function getUserById(id) {
  return db("users").where({ id }).first();
}
function getPostsByUserId(id) {
  return db("posts").where({ user_id: id });
}
