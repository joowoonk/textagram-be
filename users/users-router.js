const router = require("express").Router();
const Users = require("./users-model");
const Posts = require("../posts/posts-model");
const jwt_decode = require("jwt-decode");
const Comments = require("../comments/comments-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", async (req, res) => {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.getUserById(id);
    user.posts = await Posts.getPostsByUserId(id);
    user.bookmarks = await Posts.getBookmarkedPostsByUserId(id);
    user.upVotes = await Posts.getUpVotedPostsByUserId(id);
    user.downVotes = await Posts.getDownVotedPostsByUserId(id);
    user.following = await Users.getFollowedUsersByUserId(id);
    user.followers = await Users.getFollowersByUserId(id);
    delete user.password;

    Promise.all(
      user.posts.map(async (post) => {
        const totalVotes = await Posts.getVotingCountsByPostId(post.id);

        post.votes = totalVotes.votes;
        post.comments = await Comments.getCommentsByPostId(post.id);
        return post;
      })
    ).then((post) => {
      res.status(200).json({ user, post });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put(
  "/:id",
  restricted,
  verifyUserId,
  validateEditContent,

  (req, res) => {
    const id = req.params.id;
    const edit = req.body;

    Users.editUser(id, edit)
      .then((editedProfile) => {
        delete editedProfile.password;
        res.status(201).json({ editedProfile });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  }
);

function validateEditContent(req, res, next) {
  if (
    req.body.email === "" ||
    req.body.email === null ||
    req.body.password === "" ||
    req.body.password === null ||
    req.body.username === "" ||
    req.body.username === null
  ) {
    res.status(400).json({
      message: "Email, password, and username fields cannot be empty.",
    });
  } else {
    next();
  }
}

function verifyUserId(req, res, next) {
  const id = req.params.id;

  Users.getUserById(id)
    .then((item) => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: "User Not Found." });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = router;
