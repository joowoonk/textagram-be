const jwt = require("jsonwebtoken");

// checking if user is authorized by verifying token is in request header

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.SECRET, (err) => {
      if (err) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No token provided" });
  }
};
