exports.up = function (knex) {
  return knex.schema.createTable("followers", (followers) => {
    followers.timestamp("created_at").defaultTo(knex.fn.now());

    followers
      .integer("encourager_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    followers
      .integer("encouraged_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    // Composite primary key; this combines ids from each table to create a unique id
    followers.primary(["encourager_id", "encouraged_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("followers");
};
