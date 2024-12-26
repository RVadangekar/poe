const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// Array to store user data
let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 }
];

// GET route to fetch all users
app.get('/users', (req, res) => {
  res.json(users); // Send the users array as JSON response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
