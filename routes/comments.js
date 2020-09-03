const express = require('express');
const router = express.Router();
const commentsControl = require('../controllers/comments');

router.get("/comments", commentsControl.list)

router.get("/comments/:id", commentsControl.show)

module.exports = router