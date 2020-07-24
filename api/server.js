const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const authenticate = require("../auth/authenticate-middleware");
// const authRouter = require("../auth/auth-rotuer");
// const tomatoesRouter = require("../tomatoes/tomatoes-router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use("/api/auth", authRouter);
// server.use("/api/tomatoes", tomatoesRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
