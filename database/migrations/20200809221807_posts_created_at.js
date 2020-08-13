exports.up = async function (knex) {
  await knex.schema.alterTable("posts", (table) => {
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};
exports.down = async function (knex) {
  await knex.schema.alterTable("posts", (table) => {
    table.dropColumn("votes");
  });
};

//Having altertable prevents to rollback all the whole data.
