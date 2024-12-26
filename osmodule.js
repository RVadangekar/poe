// Include os module and create its object
const os = require('os');

// return the cpu architecture
console.log("CPU architecture: " + os.arch());

// It returns the amount of free system memory in bytes
console.log("Free memory: " , os.freemem());

// It return total amount of system memory in bytes
console.log("Total memory: " + os.totalmem());

// It returns hostname of system
console.log("Hostname: " + os.hostname());

// It return operating system name
console.log("Operating system name: " + os.type());

// It returns the platform of os
console.log('operating system platform: ' + os.platform());

// It returns the operating systems release.
console.log('OS release : ' + os.release());