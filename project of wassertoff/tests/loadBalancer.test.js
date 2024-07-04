const loadBalancer = require('../loadBalancer');

describe('Load Balancer Tests', () => {
  // Mock configuration
  const config = {
    servers: [
      'http://localhost:4000',
      'http://localhost:4001',
      'http://localhost:4002'
    ]
  };

  // Initialize load balancer before each test
  beforeEach(() => {
    loadBalancer.initialize(config);
  });

  // Test routing function
  describe('Route Request', () => {
    it('should route requests to servers', () => {
      const request = { url: '/api/users', method: 'GET' };
      const endpoint = loadBalancer.routeRequest(request);
      expect(endpoint).toMatch(/^http:\/\/localhost:400[0-2]\/api\/users$/);
    });
  });

  // Test randomized routing
  describe('Randomized Routing', () => {
    it('should route requests randomly', () => {
      const request = { url: '/api/products', method: 'POST' };
      const endpoints = new Set();
      // Perform routing multiple times to ensure randomness
      for (let i = 0; i < 10; i++) {
        const endpoint = loadBalancer.routeRequest(request);
        endpoints.add(endpoint);
      }
      expect(endpoints.size).toBeGreaterThan(1); // Ensure multiple endpoints were selected randomly
    });
  });
});

// Clean up after all tests (if needed)
afterAll(() => {
  // Perform cleanup tasks if necessary
});
