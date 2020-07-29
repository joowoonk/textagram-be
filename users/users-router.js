const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware");

//$2a$10$jWsh5BI9H8SQog/HERgkueoBuS2joRg5WYh8duCV86nwFuun7Awyy
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
    user.posts = await Users.getPostsById(id);
    // user.voted_posts =  await
    //user.followers =
  } catch (error) {
    const response = res.status(500).json({ error });
    console.log(response);
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
