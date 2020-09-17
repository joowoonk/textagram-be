const db = require("../database/db");

module.exports = {
  getAllFollowers,
  followUser,
  unfollowerUser,
};

function getAllFollowers() {
  return db("followers");
}

async function followUser(texter_id, follower_id) {
  await db("followers").insert({ texter_id, follower_id });

  return db("followers")
    .join("users", "followers.texter_id", "users.id")
    .where("followers.follower_id", "=", follower_id)
    .select(
      "followers.created_at",
      "users.id",
      "users.fake_id",
      "users.email",
      "users.profile_picture",
      "users.location"
    );
}

async function unfollowerUser(texter_id, follower_id) {
  await db("followers").where({ texter_id, follower_id }).del();

  return db("followers")
    .join("users", "followers.texter_id", "users.id")
    .where("followers.follower_id", "=", follower_id)
    .select(
      "followers.created_at",
      "users.id",
      "users.fake_id",
      "users.email",
      "users.profile_picture",
      "users.location"
    );
}
