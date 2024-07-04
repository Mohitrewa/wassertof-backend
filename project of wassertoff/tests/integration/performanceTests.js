const request = require('supertest');
const app = require('../../index'); // Assuming your main entry point is `index.js`

describe('API Performance Tests', () => {
  // Performance test for REST API endpoint
  describe('GET /api/users', () => {
    it('should respond within acceptable time', async () => {
      const startTime = Date.now();
      const response = await request(app).get('/api/users');
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThanOrEqual(1000); // Assuming response time should be under 1000ms
    });
  });

  // Performance test for GraphQL API endpoint
  describe('GraphQL API', () => {
    it('should respond within acceptable time', async () => {
      const startTime = Date.now();
      const query = `
        {
          hello
        }
      `;
      const response = await request(app)
        .post('/api/graphql')
        .send({ query });
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThanOrEqual(1000); // Assuming response time should be under 1000ms
    });
  });

  // Performance test for gRPC-like API endpoint
  describe('gRPC-like API', () => {
    it('should respond within acceptable time', async () => {
      const startTime = Date.now();
      const response = await request(app)
        .post('/api/grpc')
        .send({});
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      expect(response.status).toBe(200);
      expect(responseTime).toBeLessThanOrEqual(1000); // Assuming response time should be under 1000ms
    });
  });
});

afterAll(async () => {
  // Clean up tasks after all tests (e.g., closing server connections)
  await app.close(); // Assuming `app` has a `close` method to gracefully shut down the server
});
