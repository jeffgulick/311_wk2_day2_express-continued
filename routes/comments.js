const express = require('express');
const comments = require('../data/comments');
const router = express.Router();

router.get("/comments", (req, res) => {
    res.json(comments);
})

router.get("/comments/:id", (req, res) => {
    res.json(comments.filter(comment => comment._id == (req.params.id)));
})

module.exports = router