const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const postsRouter = require("../posts/posts-router");
const commentsRouter = require("../comments/comments-router");
// Still need to work on followers endpoints

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);
server.use("/api/comments", commentsRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
