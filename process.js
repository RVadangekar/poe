
const process = require('process'); 
//1
console.log("1. process.argv: Command-line arguments passed to the Node.js process.");
console.log("Arguments:", process.argv);

console.log("Process ID:", process.pid);


console.log(process.arch);

//2
console.log("Platform:", process.platform);

console.log(process.version);


console.log("4. process.cwd(): The current working directory of the process.");
console.log("Current Directory:", process.cwd());

//3
console.log("Environment Variables:", process.env);

//4
console.log("System uptime (in seconds):", process.uptime());


//5

console.log(process.memoryUsage()); 




console.log('Feature Property: ', process.features);
