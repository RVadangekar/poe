const express = require('express');
const app = express();

app.use(express.json());

const router = express.Router();
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// GET the current date and time
router.get('/time', (req, res) => {
  const time = new Date();
  res.send(`Current Date and Time: ${time}`);
});

// Use the router for routes starting with '/users'
app.use('/users', router);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
