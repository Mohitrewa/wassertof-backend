const queue = require('./utils/queue');
const logger = require('./utils/logger');
const apiEndpoints = require('./apiEndpoints');

let servers = [];
let serverIndex = 0;

function initialize(config) {
  // Initialize servers from configuration
  servers = config.servers;
  // Initialize queue or queues based on configuration
  queue.initialize(config.queueStrategy);
}

function routeRequest(req) {
  // Perform routing logic here based on request criteria
  let selectedEndpoint;
  
  // Example: Routing based on API type
  if (req.headers['content-type'] === 'application/json') {
    selectedEndpoint = apiEndpoints.restAPI;
  } else if (req.headers['content-type'] === 'application/graphql') {
    selectedEndpoint = apiEndpoints.graphqlAPI;
  } else {
    selectedEndpoint = apiEndpoints.grpcAPI;
  }

  // Log endpoint selection
  logger.logEndpointSelection(req, selectedEndpoint);

  // Simulate adding request to queue (assuming synchronous for simplicity)
  queue.enqueue(req);

  return selectedEndpoint;
}

module.exports = {
  initialize,
  routeRequest
};
