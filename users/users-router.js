const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Users = require("./users-model.js");
const Posts = require("../posts/posts-model");
const restricted = require("../auth/restricted-middleware");

//--/api/users

//GET all the users info

router.get("/", (req, res) => {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//GET User By Id
router.get("/:id", verifyUser, async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.getUserById(id);
    user.posts = await Posts.getPostsByUserId(id);
    user.voting_counts = await Posts.getVotingCountsByPostId(id);
    user.followers = await Users.getFollowersByUserId(id);
    user.following = await Users.getFollowedUsersByUserId(id);
    delete user.password;
    Promise.all(
      user.posts.map(async (post) => {
        const liked = await Posts.getVoteCounts(post.id);

        post.voting_counts = liked.count;

        return post;
      })
    ).then((post) => {
      res.status(200).json({ user });
    });
  } catch (err) {
    console.log(err);
    const response = res.status(500).json({ err });
    // console.log(response);
  }
});

function verifyUser(req, res, next) {
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const id = req.params.id;

  if (+id === decoded.subject) {
    next();
  } else {
    res.status(401).json({
      message:
        "invalid token, therefore you are not allowed to proceed further more.",
    });
  }
}

// verifyUser(1, 2, 3);

module.exports = router;
