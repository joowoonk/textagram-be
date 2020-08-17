const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("up_voted_post", (up_voted_post) => {
    //Making a primary key. This will combine id of both tables and come up with a unique id
    up_voted_post.primary(["user_id", "post_id"]);
    up_voted_post.timestamp("up_voted_at").defaultTo(knex.fn.now());
    up_voted_post.boolean("voted").defaultTo(0);
    up_voted_post
      .integer("post_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    up_voted_post
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
  return knex.schema.dropTableIfExists("up_voted_post");
};
