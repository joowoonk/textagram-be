const db = require("../database/db");

module.exports = {
  getAllPosts,
  getPostsById,
  findBy,
  getPostsByUserId,
  getPostsByUserId,
  getVotingCountsByPostId,

  addNewPost,
  updatePost,
  deletePost,
};

function getAllPosts() {
  return db("posts");
}

function getPostsById(id) {
  return db("posts").where({ id }).first();
}

async function getPostsByUserId(id) {
  return db("posts").where({ user_id: id });
}

// getFollowedUsersByUserId(id){}

async function getVotingCountsByPostId(post_id) {
  const list = await db("up_voted_post")
    .where({ post_id })
    .join("users", "up_voted_post.user_id", "users.id")
    .select(
      "up_voted_post.user_id",
      "up_voted_post.post_id",
      "users.username",
      "users.avatar_url"
    );

  let count = list.length;
  return { count, list };
}

function findBy(filter) {
  return db("posts").where(filter);
}

function getPostsByUserId(id) {
  return db("posts").where({ user_id: id });
}

async function addNewPost(post) {
  const [id] = await db("posts").insert(post, "id");

  return getPostsById(id);
}

async function updatePost(id, changes) {
  await db("posts").where({ id }).update(changes);

  return getPostsById(id);
}

function deletePost(id) {
  return db("posts").where({ id }).del();
}
