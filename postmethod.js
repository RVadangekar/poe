const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

let users = [];

app.post('/user', (req, res) => {
  const { name, age } = req.body;

  if (name && age) {
    const newUser = { name, age }; // Create a new user object
    users.push(newUser); // Add user to the list
    res.status(201).json({ // Return both the message and the user object
      message: 'User added successfully!',
      user: newUser // Display the added user
    });
  } else {
    res.status(400).send('Name and age are required!');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
