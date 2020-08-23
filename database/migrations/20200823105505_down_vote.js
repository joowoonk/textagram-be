exports.up = async function (knex) {
  await knex.schema.createTable("down_voted_post", (down_voted_post) => {
    //Making a primary key. This will combine id of both tables and come up with a unique id
    down_voted_post.primary(["user_id", "post_id"]);
    down_voted_post.timestamp("down_voted_at").defaultTo(knex.fn.now());
    down_voted_post.boolean("down_voted").defaultTo(0);
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

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("up_voted_post");
};
