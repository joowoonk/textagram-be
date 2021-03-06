const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Followers = require("./followers-model");

router.post("/:id", (req, res) => {
  const texter_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const follower_id = decoded.subject;

  console.log(texter_id, follower_id);

  Followers.followUser(texter_id, follower_id)
    .then((followered) => {
      res.status(200).json({ followered });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

router.delete("/:id", (req, res) => {
  const texter_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const follower_id = decoded.subject;

  console.log(texter_id, follower_id);

  Followers.unfollowerUser(texter_id, follower_id)
    .then((followers) => {
      res.status(200).json({ message: "you've unfollowed this user" });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

module.exports = router;
