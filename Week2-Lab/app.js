// Import the express
const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');

// Configure the application port
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/test.html"));
});

app.get("/json", (req, res) => {
  res.json({
    result: "My name is Muthu Selvam.",
  });
});

app.get("/text", (req, res) => {
  res.send('{"result": "My name is Muthu Selvam."}');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
