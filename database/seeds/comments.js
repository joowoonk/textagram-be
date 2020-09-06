// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const comments = [
    {
      comment: "first comments! Ooh hoo!",
      post_id: 1,
      user_id: 2,
    },
    {
      comment:
        "Having three real friends in life is equivalent to having a successful life",
      post_id: 1,
      user_id: 3,
    },
    {
      comment: "Forest Gump is such a best movie in our life time",
      post_id: 2,
      user_id: 3,
    },
    {
      comment: "May the force be with you!",
      post_id: 4,
      user_id: 2,
    },
    {
      comment: "Nike probably got their slogan from Yoda 😉😉😉",
      post_id: 4,
      user_id: 1,
    },
  ];
  for (let i = 0; i < comments.length; i++) {
    comments[i].comment = comments[i].comment.split("\n");
  }
  return knex("comments").insert(comments);
};
