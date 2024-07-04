function logEndpointSelection(req, endpoint) {
    console.log(`Request ${req.method} ${req.url} routed to ${endpoint}`);
    // Log more details like request timestamp, etc.
  }
  
  module.exports = {
    logEndpointSelection
  };
  