const router = require("express").Router();
const jwt_decode = require("jwt-decode");

const Comments = require("./comments-model");

// --- api/comments

// GET comment by ID //

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Comments.getCommentById(id)
    .then((comment) => {
      res.status(200).json({ comment });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// POST comment by post ID //

router.post("/:id", (req, res) => {
  let id = req.params.id;
  let comment = req.body;
  const token = req.headers.authorization;
  const decode = jwt_decode(token);
  comment.post_id = id;
  comment.user_id = decode.subject;

  comment.comment = comment.comment.split("\n");
  Comments.addComment(comment)
    .then((newComment) => {
      res.status(201).json({ newComment });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

// GET comment by Post_id //

router.get("/post/:id", (req, res) => {
  const id = req.params.id;

  Comments.getCommentsByPostId(id)
    .then((comments) => {
      res.status(200).json({ comments });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// GET comment by User_id //

router.get("/user/:id", (req, res) => {
  const id = req.params.id;

  Comments.getCommentsByUserId(id)
    .then((comments) => {
      res.status(200).json({ comments });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// PUT (UDATE) comment by id //

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Comments.updateCommentById(id, changes)
    .then((updatedComment) => {
      res.status(201).json({ updatedComment });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// DELETE comment by id //

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Comments.deleteCommentById(id)
    .then((deleted) => {
      res
        .status(200)
        .json({ message: "Your comment's successfully deleted.", deleted });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
