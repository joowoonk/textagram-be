const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "John",
      email: "john@mail.com",
      password: "123123",
    },
    {
      username: "david",
      email: "david@mail.com",
      password: "123123123",
    },
    {
      username: "jwkk",
      email: "jwkk@mail.com",
      password: "123123123",
    },
  ];
  let i;
  for (i = 0; i < users.length; i++) {
    users[i].password = bcrypt.hashSync(users[i].password, 10);
    users[i].fake_id = `acct${uuidv4().substring(0, 5)}`;
  }

  return knex("users").insert(users);
};
