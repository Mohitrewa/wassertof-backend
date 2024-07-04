function handleRequest(req, res) {
    // Simulate response time
    const responseTime = Math.random() * 1000; // Random response time between 0 to 1000ms
    setTimeout(() => {
      res.send('Response from REST API');
    }, responseTime);
  }
  
  module.exports = {
    handleRequest
  };
  