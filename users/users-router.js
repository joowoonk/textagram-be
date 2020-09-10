const router = require("express").Router();
const Users = require("./users-model");
const Posts = require("../posts/posts-model");
const Comments = require("../comments/comments-model");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.getUserById(id);
    user.posts = await Posts.getPostsByUserId(id);
    user.bookmarks = await Posts.getBookmarkedPostsByUserId(id);
    user.upVotes = await Posts.getUpVotedPostsByUserId(id);
    user.downVotes = await Posts.getDownVotedPostsByUserId(id);
    user.following = await Users.getFollowedUsersByUserId(id);
    user.follwers = await Users.getFollowersByUserId(id);
    delete user.password;

    // user.bookmarks.forEach(async (post) => {
    //   const comments = await Comments.getCommentsByPostId(post.id);
    //   post.comments = comments.length;
    //   console.log(post);
    //   return post;
    // });

    // console.log(user.bookmarks);
    Promise.all(
      user.posts.map(async (post) => {
        const totalVotes = await Posts.getVotingCountsByPostId(post.id);
        post.votes = totalVotes.count;

        return post;
      })
    ).then((post) => {
      res.status(200).json({ user, post });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
