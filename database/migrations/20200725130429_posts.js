const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("posts", (posts) => {
    posts.increments();

    posts.string("posts", 3000).notNullable();
    posts.integer("votes").defaultTo(0);
    posts.string("hashtags", 500);
    // .split(/[ ,#'"]+/).filter(Boolean);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("posts");
};
