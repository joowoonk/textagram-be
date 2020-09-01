// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const post = [
    {
      title: "The Cost of Keto",
      context: `I switched to a Keto diet 3 months ago. I didn’t struggle much at all. I enjoyed all my meals, lost my cravings, and became easily satiated.
      The foods I was worried about losing (pizza, ice cream, beer) became non-issues (thanks Keto ice cream! Thanks sausage-crust pizza! Thanks low-carb beer!).
      Since I started I lost 30 lbs going from 218 to 188. I barely exercised. But the biggest hidden cost of going on keto is in the wardrobe. Because none of my pants fit anymore.
      My belt is too big to even keep them up! Keto problems.  EDIT: I just realized that tone is hard to convey in text. I was trying to be cheeky about the cost of losing weight and feeling awesome. By no means am I complaining. I’m happy to spend money on new, smaller-sized clothes. It’s actually a pleasure. And completely worth it.`,
      user_id: 3,
      hashtags: ["#keto", "#reddit", "#testimony"],
    },
  ];
  for (let i = 0; i < post.length; i++) {
    post[i].context = post[i].context.split("\n");
  }
  return knex("posts").insert(post);
};
