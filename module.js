// Import the arithmetic module
const arithmetic = require('./arithmetic');

// Use the functions from the arithmetic module
const a = 10;
const b = 5;

console.log(`${a} + ${b} =`, arithmetic.add(a, b));
console.log(`${a} - ${b} =`, arithmetic.subtract(a, b));
console.log(`${a} * ${b} =`, arithmetic.multiply(a, b));

try {
    console.log(`${a} / ${b} =`, arithmetic.divide(a, b));
} catch (error) {
    console.error(error.message);
}

// Test with division by zero
try {
    console.log(`${a} / 0 =`, arithmetic.divide(a, 0));
} catch (error) {
    console.error(error.message);
}
