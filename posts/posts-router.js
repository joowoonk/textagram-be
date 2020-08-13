const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Posts = require("./posts-model");
const Comments = require("../comments/comments-model");
const restricted = require("../auth/restricted-middleware");

// --- api/posts

// GET all the posts

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.getAllPosts();
    // console.log({ posts });

    Promise.all(
      posts.map(async (post) => {
        const likes = await Posts.getVotingCountsByPostId(post.id);
        const comments = await Comments.getCommentsByPostId(post.id);
        console.log({ comments });
        post.likes = likes.count;
        post.comments = comments.length;
        // console.log({ post });
        return post;
      })
    )
      .then((posts) => {
        // console.log(posts);
        res.status(200).json({ posts });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log({ id });
  Posts.getPostById(id)
    .then((post) => {
      res.status(200).json({ post });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
