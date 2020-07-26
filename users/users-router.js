const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware");

//fetch all the users info
router.get("/", (req, res) => {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
