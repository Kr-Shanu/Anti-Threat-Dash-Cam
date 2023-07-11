const router = require('express').Router();
const getAllDriver = require('../context/drivers/getAlldrivers')

router.get('/', getAllDriver);

module.exports = router;