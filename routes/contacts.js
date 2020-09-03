const express = require('express');
const router = express.Router();

const contactControl = require('../controllers/contacts')

router.get('/contacts', contactControl.list);//gets the whole object
router.get('/contacts/:id', contactControl.show);//gets by user id

module.exports = router