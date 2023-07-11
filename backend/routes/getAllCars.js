const router = require('express').Router();
const getAllCars = require('../context/drivers/getAllCars')

router.get('/', getAllCars);

module.exports = router;