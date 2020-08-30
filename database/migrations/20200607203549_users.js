exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments();

    users.varchar("username", 128).notNullable().unique();
    users.varchar("password", 128).notNullable();
    users.varchar("email", 128).notNullable().unique();
    users.timestamp("created_at").defaultTo(knex.fn.now());
    users.varchar("fake_id", 20);
    users.varchar("location", 150);
    users
      .varchar("profile_picture", 1000)
      .defaultTo(
        "https://static.wixstatic.com/media/4151a5_7706b6198d164a3e947f4548166228ad~mv2.png"
      );
    users.varchar("about", 200).defaultTo("About yourself");
    users.boolean("is_admin").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
