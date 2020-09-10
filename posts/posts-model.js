const db = require("../database/db");
const Comments = require("../comments/comments-model");

module.exports = {
  getAllPosts,
  getPostsById,
  findBy,
  findById,
  getPostsByUserId,
  getVotingCountsByPostId,
  getBookmarkedPostsByUserId,
  addNewPost,
  updatePost,
  deletePost,
  searchByTitle,
  getBookmarksCounts,
  upVotingPost,
  removeUpVotingPost,
  downVotingPost,
  removeDownVotingPost,
  bookmarkingPost,
  removeBookmarkingPost,
  getUpVotedPostsByUserId,
  getDownVotedPostsByUserId,
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
      "posts.feeling",
      "posts.hashtags",
      "users.fake_id",
      "users.profile_picture",
      "users.is_admin"
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
      "posts.created_at",
      "posts.hashtags",
      "posts.feeling",
      "users.fake_id",
      "users.profile_picture",
      "users.is_admin",
      "users.id as user_id"
    );
  post.votes = await getVotingCountsByPostId(post.id);
  return post;
}

async function getPostsByUserId(id) {
  return db("posts").where({ user_id: id });
}

// getFollowedUsersByUserId(id){}

function findBy(filter) {
  return db("posts").where(filter);
}

function findById(id) {
  return db("posts").where({ id }).first();
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

function searchByTitle(value) {
  return db("posts")
    .where(db.raw('LOWER("title")'), "like", `%${value.toLowerCase()}%`)
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.hashtags",
      "users.fake_id",
      "users.profile_picture",
      "users.is_admin"
    );
}

async function getBookmarkedPostsByUserId(user_id) {
  const bookmarked = await db("bookmarks").where({ user_id });

  return Promise.all(
    bookmarked.map(async (bookmarked) => {
      return await getPostsById(bookmarked.post_id);
    })
  )
    .then((bookmarkedPosts) => {
      return bookmarkedPosts;
    })
    .catch((err) => {
      console.error({ err });
    });
}

async function getUpVotedPostsByUserId(user_id) {
  const upVoted = await db("up_voted_post").where({ user_id });

  return Promise.all(
    upVoted.map(async (upVoted) => {
      return await getPostsById(upVoted.post_id);
    })
  )
    .then((upVotedPosts) => {
      return upVotedPosts;
    })
    .catch((err) => {
      console.error({ err });
    });
}

async function getDownVotedPostsByUserId(user_id) {
  const downVoted = await db("down_voted_post").where({ user_id });

  return Promise.all(
    downVoted.map(async (downVoted) => {
      return await getPostsById(downVoted.post_id);
    })
  )
    .then((downVotedPosts) => {
      return downVotedPosts;
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
      "users.profile_picture",
      "users.is_admin"
    );

  const list = await getBookmarksCounts(post.id);
  post.votes = list.count;
  return post;
}

async function getVotingCountsByPostId(post_id) {
  const upVoted = await db("up_voted_post")
    .where({ post_id })
    .join("users", "up_voted_post.user_id", "users.id")
    .select(
      "up_voted_post.user_id",
      "up_voted_post.post_id",
      "users.fake_id",
      "users.profile_picture"
    );
  const downVoted = await db("down_voted_post")
    .where({ post_id })
    .join("users", "down_voted_post.user_id", "users.id")
    .select(
      "down_voted_post.user_id",
      "down_voted_post.post_id",
      "users.fake_id",
      "users.profile_picture"
    );

  let votes = upVoted.length - downVoted.length;
  return { votes, upVoted, downVoted };
}

async function getBookmarksCounts(post_id) {
  return db("bookmarks")
    .where("post_id", "=", post_id)
    .count("post_id as count")
    .first();
}

async function upVotingPost(user_id, post_id) {
  await db("up_voted_post").insert({ user_id, post_id });

  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}

async function removeUpVotingPost(user_id, post_id) {
  await db("up_voted_post").where({ user_id, post_id }).del();

  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.created_at",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}

async function downVotingPost(user_id, post_id) {
  await db("down_voted_post").insert({ user_id, post_id });

  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}

async function removeDownVotingPost(user_id, post_id) {
  await db("down_voted_post").where({ user_id, post_id }).del();

  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.created_at",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}

async function bookmarkingPost(user_id, post_id) {
  await db("bookmarks").insert({ user_id, post_id });

  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}

async function removeBookmarkingPost(user_id, post_id) {
  await db("bookmarks").where({ user_id, post_id }).del();

  return db("posts")
    .join("users", "posts.user_id", "users.id")
    .select(
      "posts.id",
      "posts.title",
      "posts.context",
      "posts.created_at",
      "posts.user_id",
      "users.fake_id",
      "users.profile_picture"
    );
}
