// 1. console.log() - Standard output
console.log("This is a standard log message.");

// 2. console.error() - Standard error output
console.error("This is an error message.");

// 3. console.warn() - Warning output
console.warn("This is a warning message.");

// 4. console.info() - Informational output
console.info("This is an informational message.");

// 5. console.table() - Displays tabular data
const user = { name: "Rasika", age: 22, city: "Kolhapur" };
console.table(user);

// 6. console.time() - Starts a timer
console.time("Timer");
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}

const myObject = [{ name: "John", age: 30 },{ name: "ram", age: 20 }];
console.dir(myObject); 

// 7. console.timeEnd() - Ends the timer and displays elapsed time
console.timeEnd("Timer");

