const router = require("express").Router();
const Users = require("./users-model");
const Posts = require("../posts/posts-model");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Users.getUserById(id);

  user.posts = await Users.getUserById(id);
  user.bookmarks = await Posts.
});

module.exports = router;
