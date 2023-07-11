const router = require('express').Router();
const machineLearningApi = require('../controllers/machineLearningApi')

router.get('/', (req, res) => {

    res.status(200).json({
        success:1,
        message:true
    });
});


router.post('/', (req, res) => {

    // const {result} = req.body;
    // console.log(result);
    if(machineLearningApi("true")) {
        res.status(200).send({
            success: 1,
            value: "true",
            message: "No threat found"
        }); // false means no threat
    }
    else res.status(400).send("Error");
});

module.exports = router;