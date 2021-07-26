const express = require('express');
const router = express.Router();
const os = require('os');

// @route: GET root directory  
// @description: To check how many cpus are on the machine
// @access: /system-info/cpus-count

this.systemInfoArr = ["Architecture", "CPUs", "Network interfaces", "Platform", "Release number", "User info"];

router.get('/cpu-count', (req, res) => {
    try {
        let cpuCount = os.cpus().length
        return res.send(`There are ${cpuCount} cpu/s on this machine.`);
    } catch (err) {
        console.log(`log err ${err}`);
    }
});

// @route: GET root directory  
// @description: To get the model and speed of each cpu 
// @access: /system-info/cpu-info

router.get('/cpu-info', (req, res) => {
    try {
        let cpu = os.cpus()
        let info = cpu[0]
        let { model, speed } = info;
        res.send(`The model of each cpu is: ${model}.\nThe speed of each cpu is: ${speed}.`);
    } catch (err) {
        console.log(`log err ${err}`);
    }
});

module.exports = router;
