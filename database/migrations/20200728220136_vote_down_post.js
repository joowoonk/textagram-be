const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("down_voted_post", (down_voted_post) => {
    //Making a primary key. This will combine id of both tables and come up with a unique id
    down_voted_post.primary(["user_id", "post_id"]);
    down_voted_post.timestamp("down_voted_at").defaultTo(knex.fn.now());
    down_voted_post
      .integer("post_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    down_voted_post
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
  return knex.schema.dropTableIfExists("down_voted_post");
};
