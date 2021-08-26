const express = require('express');
const commentController = require('../controllers/comment');

const router = express.Router();

router.post("/", commentController.save);
router.get("/", commentController.index);
router.get("/:id", commentController.show);
router.patch("/:id", commentController.update);
router.delete("/:id", commentController.destroy);

module.exports = router;