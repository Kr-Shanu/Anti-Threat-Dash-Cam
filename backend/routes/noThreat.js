const router = require('express').Router();

router.get('/', (req, res) => {

    res.status(200).json({
        success: 1,
        message: "Reached route of no threat"
    })
})

module.exports = router;