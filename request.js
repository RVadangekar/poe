const express = require('express');
const app = express();

app.use(express.json());

// Route to demonstrate req.method
app.get('/', (req, res) => {
  res.send(`HTTP Method used: ${req.method}`);
});

// Route to demonstrate req.url and req.originalUrl
app.get('/info', (req, res) => {
  res.send(`Requested URL: ${req.url}`);
});

// Route to demonstrate req.query
app.get('/search', (req, res) => {
  res.send(`Search Query: ${req.query.q || 'No query provided'}`);
});

// Route to demonstrate req.params
app.get('/user/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get('/headers', (req, res) => {
  const clientHeaders = req.headers;
  res.send(`Client Headers: ${JSON.stringify(clientHeaders, null, 2)}`);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//http://localhost:3000/: Displays the HTTP method (GET).
//http://localhost:3000/info: Displays the requested URL.
//http://localhost:3000/search?q=example: Displays the query parameter (example).
//http://localhost:3000/user/123: Displays the user ID (123).
