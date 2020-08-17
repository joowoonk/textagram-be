const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "KANG",
      email: "admin@textagram.com",
      password: process.env.ADMIN_PW,
    },
  ];
  let i;
  for (i = 0; i < users.length; i++) {
    users[i].password = bcrypt.hashSync(users[i].password, 10);
    users[i].fake_id = `ADMIN${users[i].username.toUpperCase()}`;
    users[i].is_admin = true;
  }

  return knex("users").insert(users);
};

// knex seed:make seed_name
// knex seed:make seed_name -x ts # Generates a TypeScript seed file
// knex seed:run # Runs all seed files
// knex seed:run --specific=seed-filename.js # Runs a specific seed file
