const os = require('os');

module.exports = function OSController() {
    this.getSystemInfo = {
        'systemArchitecture': os.arch(),
        'cpus': os.cpus(),
        'networkInterfaces': os.networkInterfaces(),
        'platform': os.platform(),
        'releaseNumber': os.release(),
        'systemUserInfo': os.userInfo(),
    };

    this.systemInfoArr = ["Architecture", "CPUs", "Network interfaces", "Platform", "Release number", "User info"];

    this.getSystemInfo = async function () {
        console.log('exec getSystemInfo')
        try {
            return new Promise((resolve, reject) => {
                return resolve(this.getSystemInfo);
            });
        } catch (err) {
            throw new Error(`err in getSystemInfo: ${err}`);
        };
    };
};
