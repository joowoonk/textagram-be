// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const comments = [
    {
      text: "first comments! Ooh hoo!",
      post_id: 1,
      user_id: 2,
    },
    {
      text:
        "Having three real friends in life is equivalent to having a successful life",
      post_id: 1,
      user_id: 3,
    },
    {
      text: "Forest Gump is such a best movie in our life time",
      post_id: 2,
      user_id: 3,
    },
    {
      text: "May the force be with you!",
      post_id: 4,
      user_id: 2,
    },
    {
      text: "Nike probably got their slogan from Yoda 😉😉😉",
      post_id: 4,
      user_id: 1,
    },
  ];
  return knex("comments").insert(comments);
};
