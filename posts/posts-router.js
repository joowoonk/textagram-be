const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Posts = require("./posts-model");
const Comments = require("../comments/comments-model");
const Users = require("../users/users-model");
const restricted = require("../auth/restricted-middleware");

// --- api/posts

// GET all the posts

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.getAllPosts();

    Promise.all(
      posts.map(async (post) => {
        const votes = await Posts.getVotingCountsByPostId(post.id);

        const comments = await Comments.getCommentsByPostId(post.id);

        post.votes = votes.votes;
        post.comments = comments.length;
        return post;
      })
    )
      .then((posts) => {
        res.status(200).json({ posts });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const post = await Posts.getPostsById(id);
    post.comments = await Comments.getCommentsByPostId(id);

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/search/:title", async (req, res) => {
  const title = req.params.title;
  Posts.searchByTitle(title)
    .then((searched) => {
      res.status(200).json(searched);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.post("/", (req, res) => {
  let post = req.body;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);

  post.user_id = decoded.subject;
  post.hashtags = post.hashtags.replace(",", "");
  post.hashtags = post.hashtags.replace("#", "");
  post.hashtags = post.hashtags.replace(
    /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.#@£\/]/g,
    " "
  );
  post.hashtags = post.hashtags
    .replace(/#/g, "")
    .replace(/([^" "]+)/g, "#" + "$1");
  post.hashtags = post.hashtags.split(" ");
  post.hashtags = post.hashtags.filter((hash) => {
    return hash != "";
  });

  post.context = post.context.split("\n");

  if (post.hashtags.length <= 5) {
    Posts.addNewPost(post)
      .then((newPost) => {
        res.status(201).json({ newPost });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    // alert("your hashtags are too many!");
    res.status(402).json({ message: "your hashtags are too many!" });
  }
});

router.delete("/:id", restricted, verifyPostId, verifyUser, (req, res) => {
  const id = req.params.id;

  Posts.deletePost(id)
    .then((del) => {
      res.status(200).json({ message: "Your post is gone" });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put(
  "/:id",
  restricted,
  verifyPostId,
  verifyUser,
  verifyPostContent,
  (req, res) => {
    console.log("yes?");
    const id = req.params.id;
    const changes = req.body;
    console.log(id);

    Posts.updatePost(id, changes)
      .then((updatePost) => {
        res.status(201).json(updatePost);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

//adding new bookmark to a post
router.post("/:id/bookmark", restricted, (req, res) => {
  const post_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const user_id = decoded.subject;

  Posts.bookmarkingPost(user_id, post_id)
    .then((results) => {
      Promise.all(
        results.map(async (post) => {
          const bookmarks = await Posts.getBookmarksCounts(post.id);
          const comments = await Comments.getCommentsByPostId(post.id);
          post.bookmarks = bookmarks.count;
          post.comments = comments.length;
          return post;
        })
      ).then((post) => {
        res.status(200).json({ post });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/:id/upvote", restricted, (req, res) => {
  const post_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const user_id = decoded.subject;

  Posts.upVotingPost(user_id, post_id)
    .then((results) => {
      Promise.all(
        results.map(async (post) => {
          const votes = await Posts.getVotingCountsByPostId(post.id);
          post.votes = votes.votes;
          return post;
        })
      ).then((post) => {
        res.status(200).json({ post });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id/removeupvote", restricted, (req, res) => {
  const post_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const user_id = decoded.subject;

  Posts.removeUpVotingPost(user_id, post_id)
    .then((results) => {
      Promise.all(
        results.map(async (post) => {
          const votes = await Posts.getVotingCountsByPostId(post.id);
          post.votes = votes.votes;
          return post;
        })
      ).then((posts) => {
        res.status(200).json({ posts });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/:id/downvote", restricted, (req, res) => {
  const post_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const user_id = decoded.subject;

  Posts.downVotingPost(user_id, post_id)
    .then((results) => {
      Promise.all(
        results.map(async (post) => {
          const votes = await Posts.getVotingCountsByPostId(post.id);
          post.votes = votes.votes;
          return post;
        })
      ).then((post) => {
        res.status(200).json({ post });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id/removedownvote", restricted, (req, res) => {
  const post_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const user_id = decoded.subject;

  Posts.removeDownVotingPost(user_id, post_id)
    .then((results) => {
      Promise.all(
        results.map(async (post) => {
          const votes = await Posts.getVotingCountsByPostId(post.id);
          post.votes = votes.votes;
          return post;
        })
      ).then((posts) => {
        res.status(200).json({ posts });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id/unbookmark", restricted, (req, res) => {
  const post_id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const user_id = decoded.subject;

  Posts.removeBookmarkingPost(user_id, post_id)
    .then((results) => {
      Promise.all(
        results.map(async (post) => {
          const bookmarks = await Posts.getBookmarksCounts(post.id);
          const comments = await Comments.getCommentsByPostId(post.id);
          post.bookmarks = bookmarks.count;
          post.comments = comments.length;
          return post;
        })
      ).then((posts) => {
        res.status(200).json({ posts });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Middleware goes here below

function verifyPostId(req, res, next) {
  const id = req.params.id;

  Posts.findById(id)
    .then((item) => {
      if (item) {
        req.item = item;
        next();
      } else {
        res.status(404).json({ message: "Post Not Found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
}

async function verifyUser(req, res, next) {
  const id = req.params.id;
  const token = req.headers.authorization;
  const decoded = jwt_decode(token);
  const post = await Posts.getPostsById(id);
  const user = await Users.getUserById(decoded.subject);

  if (user.is_admin) {
    // checking if user logged in as an admin account
    next();
  } else if (+post.user_id === decoded.subject) {
    //Otherwise check with general accounts
    next();
  } else {
    res.status(401).json({
      message: "Make sure to log in to right user!",
    });
  }
}

function verifyPostContent(req, res, next) {
  if (
    req.body.title === "" ||
    req.body.title === null ||
    req.body.context === "" ||
    req.body.context === null
  ) {
    res.status(400).json({ message: "Title and context are required" });
  } else {
    next();
  }
}

module.exports = router;
