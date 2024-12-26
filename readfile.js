const fs = require('fs');
console.log("Synchronous File Contents:");
const data = fs.readFileSync('read.txt');
console.log(data.toString());
// Asynchronous File Read
fs.readFile('read.txt',function(err, data){
    if (err) {
       return  console.error(err);   
    }
    console.log("Asynchronous File Contents:");
    console.log(data.toString());
});

// Synchronous File Read

    
