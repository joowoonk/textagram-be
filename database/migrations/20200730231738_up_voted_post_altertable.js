exports.up = async function (knex) {
  await knex.schema.alterTable("up_voted_post", (table) => {
    table.boolean("voted").defaultTo(0);
  });
};
exports.down = async function (knex) {
  await knex.schema.alterTable("up_voted_post", (table) => {
    // table.dropColumnIfExists("voted");
  });
};

//Having altertable prevents to rollback all the whole data.
