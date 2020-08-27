const db = require("../database/db");

module.exports = {
  getAllFollowers,
  followUser,
};

function getAllFollowers() {
  return db("followers");
}

async function followUser(following_id, follower_id) {
  await db("followers").insert({ following_id, follower_id });

  return db("followers")
    .join("users", "followers.following_id", "users.id")
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
