exports.up = async function (knex) {
  await knex.schema.createTable("posts", (post) => {
    post.increments();
    post.string("title", 300).notNullable();
    post.specificType("context", "text ARRAY");
    post.timestamp("created_at").defaultTo(knex.fn.now());
    post.specificType("hashtags", "text ARRAY");
    post
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
  return knex.schema.dropTableIfExists("posts");
};
