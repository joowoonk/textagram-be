exports.up = async function (knex) {
  await knex.schema.alterTable("posts", (table) => {
    table.dropColumn("hashtags");
    table.specificType("hashtagging", "text ARRAY");
  });
};
exports.down = async function (knex) {
  await knex.schema.alterTable("posts", (table) => {});
};

//Having altertable prevents to rollback all the whole data.
