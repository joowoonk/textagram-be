// const { v4: uuidv4 } = require("uuid");

// exports.up = function (knex) {
//   return knex.schema.createTable("users", (users) => {
//     users.increments();

//     users.string("username", 128).notNullable().unique();
//     users.string("password", 128).notNullable();
//     users.string("email", 128).notNullable().unique();
//     users.timestamp("created_at").defaultTo(knex.fn.now());
//     users.string("fake_id", 128).defaultTo(`acct${uuidv4().substring(0, 5)}`);
//     users.string("location", 150);
//     users
//       .string("profile_picture", 3000)
//       .defaultTo(
//         "https://static.wixstatic.com/media/4151a5_7706b6198d164a3e947f4548166228ad~mv2.png"
//       );
//     users.string("about", 200).defaultTo("About yourself");
//     users.boolean("is_admin").defaultTo(0);
//   });
// };

// exports.down = function (knex, Promise) {
//   return knex.schema.dropTableIfExists("users");
// };
