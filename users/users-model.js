const db = require("../database/db");

module.exports = {
  getUserById,
  getPostsByUserId,
  findBy,
  addNewUser,
  editUser,
  deleteUser,
  getFollowedUsersByUserId,
  getFollowersByUserId,
  getAllUsers,
};

function getUserById(id) {
  return db("users").where({ id }).first();
}
function getPostsByUserId(id) {
  return db("posts").where({ user_id: id });
}
function getAllUsers() {
  return db("users").orderBy("users.id", "asc");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function addNewUser(user) {
  const [id] = await db("users").insert(user, "id");
  // console.log([id]);

  return getUserById(id);
}

async function editUser(id, changes) {
  await db("users").where({ id }).update(changes);

  return getUserById(id);
}

function deleteUser(id) {
  return db("users").where({ id }).del();
}

function getFollowedUsersByUserId(id) {
  return db("followers")
    .join("users", "followers.texter_id", "users.id")
    .where("followers.follower_id", "=", id)
    .select(
      "followers.created_at",
      "users.id",
      "users.fake_id",
      "users.email",
      "users.profile_picture",
      "users.location"
    );
}

function getFollowersByUserId(id) {
  return db("followers")
    .join("users", "followers.follower_id", "users.id")
    .where("followers.texter_id", "=", id)
    .select(
      "followers.created_at",
      "users.id",
      "users.fake_id",
      "users.email",
      "users.profile_picture",
      "users.location"
    );
}
