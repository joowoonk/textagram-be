const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware");

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
router.get("/:id");

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

module.exports = router;

module.exports = router;
