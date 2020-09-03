const express = require('express');
const products = require('../data/products');
const router = express.Router();

router.get("/products", (req, res) => {
    res.json(products);
})

router.get("/products/:id", (req, res) => {
    res.json(products.filter(product => product._id == (req.params.id)));
})

module.exports = router