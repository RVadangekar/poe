function add(a, b, callback) {
    const sum = a + b;
    callback(sum); // Call the callback with the result
}

function displayResult(sum) {
    console.log("The result is:", sum);
}

// Using the callback
add(5, 3, displayResult);
