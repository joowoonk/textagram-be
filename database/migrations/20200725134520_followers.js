exports.up = function (knex) {
  return knex.schema.createTable("followers", (followers) => {
    followers.timestamp("created_at").defaultTo(knex.fn.now());

    followers
      .integer("texter_id") //change the name to texter_id when you can
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    followers
      .integer("follower_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // Composite primary key; this combines ids from each table to create a unique id
    followers.primary(["texter_id", "follower_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("followers");
};
