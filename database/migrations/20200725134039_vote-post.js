const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("vote_post", (vote_post) => {
    //Making a primary key. This will combine id of both tables and come up with a unique id
    vote_post.primary(["user_id", "post_id"]);
    vote_post
      .integer("post_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    vote_post
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("vote_post");
};
