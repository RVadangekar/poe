var fs = require("fs");  
var data = 'Rasika Bhikaji Vadangekar';  

var ws = fs.createWriteStream('demo.txt');  

ws(data,'UTF8');  

ws.end();  

ws.on('finish', function() {  
    console.log("Write completed.");  
});  
ws.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  