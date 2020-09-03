const express = require('express');
const vehicles = require('../data/vehicles');
const router = express.Router();

router.get("/vehicles", (req, res) => {
    res.json(vehicles);
})

router.get("/vehicles/:id", (req, res) => {
    res.json(vehicles.filter(vehicle => vehicle._id == (req.params.id)));
})

module.exports = router