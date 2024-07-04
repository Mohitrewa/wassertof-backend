const express = require('express');
const loadBalancer = require('./loadBalancer');
const config = require('./config.json');

const app = express();
const port = config.loadBalancerPort;

// Initialize load balancer
loadBalancer.initialize(config);

// Route incoming requests through load balancer
app.get('/', (req, res) => {
  const endpoint = loadBalancer.routeRequest(req);
  // Forward request to selected endpoint
  // Example: Implement this based on your API structure
  res.send(`Request forwarded to ${endpoint}`);
});

app.listen(port, () => {
  console.log(`Load balancer running at http://localhost:${port}`);
});
