exports.up = async function (knex) {
  await knex.schema.alterTable("posts", (table) => {
    table.string("feeling", 50);
  });
};
exports.down = async function (knex) {
  await knex.schema.alterTable("posts", (table) => {
    table.dropColumnIfExists("feeling");
  });
};

//Having altertable prevents to rollback all the whole data.
