const express = require('express');
const router = express.Router();

const vehiclesControl = require('../controllers/vehicles');

router.get("/vehicles", vehiclesControl.list);
router.get("/vehicles/:id", vehiclesControl.show);
router.post("/vehicles", vehiclesControl.create);

module.exports = router