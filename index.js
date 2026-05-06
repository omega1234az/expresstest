const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route with params
app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

// POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received!',
    data: data
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});