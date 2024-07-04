const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mock API endpoints with varied response times and behaviors
app.get('/api/users', (req, res) => {
  // Simulate slow response
  setTimeout(() => {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
  }, 1000); // Simulate 1000ms delay
});

app.post('/api/products', (req, res) => {
  // Simulate fast response
  const product = { id: 1, name: 'Product A' };
  res.json(product);
});

// Start the server
app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
