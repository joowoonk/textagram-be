const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);

// server.use("/api/auth", authRouter);
// server.use("/api/tomatoes", tomatoesRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
