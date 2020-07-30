exports.up = async function (knex) {
  await knex.schema.createTable("posts", (post) => {
    post.increments();
    post.string("title", 300).notNullable();
    post.string("context", 3000).notNullable();
    post.integer("votes").defaultTo(0);
    post.string("hashtags", 500);
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
