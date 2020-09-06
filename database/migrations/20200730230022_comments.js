exports.up = function (knex) {
  return knex.schema.createTable("comments", (comments) => {
    comments.increments();

    comments.specificType("comment", "text ARRAY");
    comments.timestamp("created_at").defaultTo(knex.fn.now());

    comments
      .integer("post_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    comments
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments");
};
