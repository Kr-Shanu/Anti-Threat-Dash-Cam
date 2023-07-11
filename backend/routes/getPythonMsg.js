const {spawn} = require('child_process');
const router = require('express').Router();

router.get('/', (req, res) => {

    var dataToSend;
    const childPython = spawn('python3', ['py_models/hello.py','sent custome message']);

    // collect data from script
    childPython.stdout.on('data', (data) => {
        console.log(`Pipe data from python script ..`);
        dataToSend = data.toString();
    });

    // error handling
    childPython.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });

    // closing the fetching
    childPython.on('close', (code) => {
        console.log(`child process close all stdioi with code ${code}`);
        res.status(200).json({
            success: 1,
            message: dataToSend
        });
    });

});

module.exports = router;