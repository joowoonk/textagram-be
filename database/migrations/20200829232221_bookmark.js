exports.up = async function (knex) {
  await knex.schema.createTable("bookmarks", (bookmarks) => {
    bookmarks.boolean("is_bookmarked").defaultTo(0);
    bookmarks
      .integer("user_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    bookmarks
      .integer("post_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("posts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    //creating an unique primary key
    bookmarks.primary(["user_id", "post_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("bookmarks");
};
