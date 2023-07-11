const router = require('express').Router();
const getAllMerchant = require('../context/drivers/getAllMerchant')

router.get('/', getAllMerchant);

module.exports = router;