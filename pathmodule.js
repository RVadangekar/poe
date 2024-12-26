const path = require('path');

// 1. path.basename() - Returns the last portion of the path (file name)
const filePath = "D:\\web development course\\myapp\\src\\App.js";
console.log("File Name:");
console.log(path.basename(filePath)); // Output: 'app.js'

// 2. path.dirname() - Returns the directory name of the path
console.log("\nDirectory Name:");
console.log(path.dirname(filePath)); // Output: '/Users/rasika/Projects'

// 3. path.extname() - Returns the extension of the path (file)
console.log("\nFile Extension:");
console.log(path.extname(filePath)); // Output: '.js'

// 4. path.join() - Joins multiple path segments into a single path
const dirPath = '/Users/rasika';
const projectName = 'Projects/app.js';
console.log("\nJoined Path:");
console.log(path.join(dirPath, projectName)); // Output: '/Users/rasika/Projects/app.js'

console.log("\nResolved Absolute Path:");
console.log(path.resolve('Projects', 'app.js'));

console.log(path.isAbsolute('/Users/rasika/Projects/app.js')); // true
console.log(path.isAbsolute('Projects/app.js')); // false