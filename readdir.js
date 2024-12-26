const fs = require('fs');
const directoryPath = "C:\\Users\\RASIKA\\Documents\\certificates";

// Synchronous Directory Read
    const files = fs.readdirSync(directoryPath);
    console.log("Synchronous Directory Contents:");
    console.log(files);

// Asynchronous Directory Read
fs.readdir(directoryPath, function(err, files){
    if (err) {
        return console.error(err);
        
    }
    console.log("Asynchronous Directory Contents:");
    console.log(files);
});

