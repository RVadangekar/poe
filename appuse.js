const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request made to: ${req.url}`);
  next(); 
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('Welcome to the About Page!');
});



// Start the server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
