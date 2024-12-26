const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Sample in-memory data (replace with your actual data source)
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' }
];

// PUT route to update a user by ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  // Find the user index
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user
  users[userIndex] = { ...users[userIndex], ...updatedUser };

  res.json(users[userIndex]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});