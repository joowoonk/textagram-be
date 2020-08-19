const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const posts = [
    {
      title: "One best quote regarding a honest friendship",
      context:
        "Bestfriend is not just a word. A best friend is someone who is there for you, no matter what. Thick or thin. I can label anyone as a friend. But a bestfriend..? That is something that needs to be earned. A bestfriend knows me sometimes more than I know myself. Bestfriends share tears and laughs. You can trust them with anything and everything. I have a bunch of friends, but only a few that I can count on completely",
      user_id: 1,
      hashtags: "#friendship #friends #bestFriend",
    },
    {
      title: "One of best quote from Forrest Gump",
      context:
        "My mama always said, ‘Life was like a box of chocolates. You never know what you’re gonna get.' -Forrest Gump",
      user_id: 2,
      hashtags: "#bestMovie #forrest #gump #life",
    },
    {
      title: "One of best quote from Rush",
      context:
        "A wise man can learn more from his enemies than a fool from his friends. –Niki Lauda",
      user_id: 2,
      hashtags: "#movie #Rush #inspirational",
    },
    {
      title: "One of best line I heard from Yoda!",
      context: "Do, or do not. There is no 'try' - Yoda",
      user_id: 3,
      hashtags: "#StarWars #MayTheForceBeWithYou #Yoda",
    },
    {
      title: "Life isn't easy",
      context:
        "Living a life isn't a easy process, but do we really get to live a life we want? We will really have to think about that. Is this life what you want? If you die tonight, would you say you lived a life that you wanted? What are the things you can fix today? or something you need to do. Long term problem isn't something you may not be able to escape but are you working on it at least little by little?, you will be able to fix them eventually. Start small. You will be able to overcome it in the end.",
      user_id: 3,
      hashtags: "#encouraging #life",
    },
  ];

  function findHashtags(searchText) {
    var regexp = /\B\#\w\w+\b/g;
    result = searchText.match(regexp);
    if (result) {
      console.log(result);
      return result;
    } else {
      return false;
    }
  }
  let i;
  for (i = 0; i < posts.length; i++) {
    posts[i].hashtags = findHashtags(posts[i].hashtags);

    return knex("posts").insert(posts);
  }
};
