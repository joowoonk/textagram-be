const db = require("../data/dbConfig.js");

module.exports = {
  addNewUser,
  getAllUsers,
  findBy,
  getUserById,

  updateUser,
  deleteUser,
};

function getAllUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where({ id }).first();
}

function findBy(filter) {
  return db("users").where(filter);
}

async function addNewUser(user) {
  const [id] = await db("users").insert(user, "id");

  return getUserById(id);
}

async function updateUser(id, changes) {
  await db("users").where({ id }).update(changes);

  return getUserById(id);
}

function deleteUser(id) {
  return db("users").where({ id }).del();
}
