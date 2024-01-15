// Import the express
const express = require('express');
const app = express();

// Configure the application port
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from express and node js!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});