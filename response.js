const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// 1. res.send() - Sending a response
app.get('/', (req, res) => {
  res.send('This is a response using res.send()');
});

// 2. res.status() - Setting the HTTP status code
app.get('/status', (req, res) => {
  res.status(404).send('Resource not found! This is a 404 response.');
});

// 3. res.json() - Sending a JSON response
app.get('/json', (req, res) => {
  const data = {
    message: 'This is a JSON response',
    success: true,
  };
  res.json(data);
});

// 4. res.redirect() - Redirecting to another route
app.get('/redirect', (req, res) => {
  res.redirect('/json'); // Redirect to the /json route
});

// 5. res.set() - Setting custom response headers
app.get('/custom-header', (req, res) => {
  res.set('X-Custom-Header', 'CustomHeaderValue');
  res.send('Custom header set using res.set()');
});

// Start the server
app.listen(3000 , () => {
  console.log(`Server is running on http://localhost:3000`);
});
