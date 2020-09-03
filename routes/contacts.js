const express = require('express');
const contacts =  require('../data/contacts');
const router = express.Router();

router.get("/contacts", (req, res) => {
    res.json(contacts);
})

router.get("/contacts/:id", (req, res) => {
    res.json(contacts.filter(user => user._id == (req.params.id)));
})

module.exports = router