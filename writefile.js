const fs = require('fs');
const text = 'Hello, Node.js!';

// Synchronous File Write
    fs.writeFileSync("read.txt", text);
    console.log("Synchronously File written successfully.");

// Asynchronous File Write
fs.writeFile("read.txt",text, function(err){
    if (err) {
        return console.error(err); 
    }
    console.log("Asynchronously File written successfully.");
});

