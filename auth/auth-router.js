const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const Users = require("../users/users-model.js");
require("dotenv").config();
// ---------------------- /api/auth ---------------------- //

router.post("/register", (req, res) => {
  let user = req.body;
  user.fake_id = `acct${uuidv4().substring(0, 5)}`;
  if (req.headers.authorization === process.env.SECRET_CODE) {
    user.is_admin = process.env.ADMIN_SECRET;
    const hashAdminCode = bcrypt.hashSync(user.is_admin, 10); // 2
    user.is_admin = hashAdminCode;
  }
  // let fakeId = req.body.fake_id;

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
  console.log({ req });
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
