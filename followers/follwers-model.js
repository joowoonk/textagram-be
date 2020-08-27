const db = require("../database/db");

module.exports = {
  getAllFollowers,
  followUser,
};

function getAllFollowers() {
  return db("followers");
}

async function followUser(following_id, follower_id) {
  console.log({ following_id }, { follower_id });
  await db("followers").insert({ following_id, follower_id });

  return db("followers")
    .join("users", "followers.following_id", "users.id")
    .where("followers.follower_id", "=", follower_id)
    .select("*");
}
