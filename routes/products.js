const express = require('express');
const router = express.Router();

const productControl = require('../controllers/products')

router.get("/products", productControl.list);//get all
router.get("/products/:id", productControl.show);//get by id
router.post("/products", productControl.create);//post new

module.exports = router