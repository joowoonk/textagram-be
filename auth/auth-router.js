const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const Users = require("../users/users-model.js");
require("dotenv").config();

//ENDPOINTS FOR AUTH

//POST making an account
router.post("/register", (req, res) => {
  let user = req.body;

  if (req.headers.admin === process.env.SECRET_CODE) {
    user.is_admin = true;
  } else {
    user.is_admin = false;
  }
  if (!user.fake_id) {
    user.fake_id = `acct${uuidv4().substring(0, 5)}`;
  }
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  Users.addNewUser(user)
    .then((newUser) => {
      const token = generateToken(newUser);
      delete newUser.password;
      res.status(201).json({ newUser, token });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  // console.log({ req });
  Users.findBy({ email })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // generate token
        const token = generateToken(user);
        delete user.password;
        res.status(200).json({
          user,
          token, //return the token upon login
        });
      } else {
        res.status(401).json({ message: "Invalid Username or Password" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// This will create token.

function generateToken(user) {
  const payload = {
    subject: user.id, // standard claim = sub
    username: user.email,
  };
  const options = {
    expiresIn: "7d",
  };
  return jwt.sign(payload, process.env.SECRET, options);
}

module.exports = router;
