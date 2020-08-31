const db = require("../database/db");

module.exports = {
  getAllPosts,
  getPostsById,
  findBy,
  getPostsByUserId,
  getVotingCountsByPostId,
  getBookmarkedPostsByUserId,
  addNewPost,
  updatePost,
  deletePost,
  getBookmarksCounts,
};

function getAllPosts() {
  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.created_at",
      "posts.user_id",

      "posts.hashtags",
      "users.fake_id",
      "users.profile_picture"
    )
    .orderBy("posts.id", "DESC");
}

async function getPostsById(id) {
  const post = await db("posts")
    .where("posts.id", id)
    .first()
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.hashtags",
      "users.fake_id",
      "users.profile_picture"
    );
  post.likes = await getVotingCountsByPostId(post.id);
  return post;
}

async function getPostsByUserId(id) {
  return db("posts").where({ user_id: id });
}

// getFollowedUsersByUserId(id){}

function findBy(filter) {
  return db("posts").where(filter);
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

function search(filter) {
  return db("posts")
    .where(db.raw(`LOWER("title")`, "like", `${filter.toLowerCase()}%`))
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.description",
      "posts.hashtags",
      "users.fake_id",
      "users.profile_picture"
    );
}

async function getBookmarkedPostsByUserId(user_id) {
  const bookmarked = await db("bookmarks").where({ user_id });

  return Promise.all(
    bookmarked.map(async (bookmarked) => {
      return await getPostByIdSimple(bookmarked.post_id);
    })
  )
    .then((bookmarkedPosts) => {
      return bookmarkedPosts;
    })
    .catch((err) => {
      console.error({ err });
    });
}

async function getPostByIdSimple(id) {
  const post = await db("posts")
    .where("posts.id", id)
    .first()
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );

  const list = await getBookmarksCounts(post.id);
  post.likes = list.count;
  return post;
}

async function getVotingCountsByPostId(post_id) {
  const list = await db("up_voted_post")
    .where({ post_id })
    .join("users", "up_voted_post.user_id", "users.id")
    .select(
      "up_voted_post.user_id",
      "up_voted_post.post_id",
      "users.fake_id",
      "users.profile_picture"
    );

  let count = list.length;
  return { count, list };
}

async function getBookmarksCounts(post_id) {
  return db("bookmarks")
    .where("post_id", "=", post_id)
    .count("post_id as count")
    .first();
}
