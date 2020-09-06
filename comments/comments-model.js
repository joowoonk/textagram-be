const db = require("../database/db");

module.exports = {
  getCommentsByUserId,
  getCommentsByPostId,
  getCommentById,
  addComment,
  updateCommentById,
  deleteCommentById,
};

function getCommentsByUserId(id) {
  return db("comments").where({ user_id: id });
}

function getCommentsByPostId(id) {
  //   console.log("yes");
  return db("comments")
    .where({ post_id: id })
    .join("users", "comments.user_id", "users.id")
    .select(
      "comments.id",
      "comments.comment",
      "comments.created_at",
      "users.id as user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}
function getCommentById(id) {
  return db("comments").where({ id }).first();
}

async function addComment(comment) {
  const [id] = await db("comments").insert(comment, "id");

  return getCommentById(id);
}

function updateCommentById(id, changes) {
  return db("comments").where({ id }).update(changes);
}

function deleteCommentById(id) {
  return db("comments").where({ id }).del();
}
