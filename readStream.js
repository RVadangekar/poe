var fs = require("fs");  
var data = '';  

var rs = fs.createReadStream('demo.txt');  


rs.on('data', function(chunk) {  
   data += chunk;  
});  
rs.on('end',function(){ 
console.log(data);    
   
});  
rs.on('error', function(err){  
   console.log(err.stack);  
});  

console.log("Program Ended"); 
