exports.up = async function (knex) {
  await knex.schema.alterTable("followers", (table) => {
    table.renameColumn("followered_id", "follower_id");
  });
};
exports.down = async function (knex) {
  await knex.schema.alterTable("followers", (table) => {
    table.dropColumnIfExists("follower_id");
  });
};

//Having altertable prevents to rollback all the whole data.
