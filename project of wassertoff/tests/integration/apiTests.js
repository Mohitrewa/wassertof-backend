const request = require('supertest');
const app = require('../../index'); // Assuming your main entry point is `index.js`

describe('API Endpoint Tests', () => {
  // Test for REST API endpoint
  describe('GET /api/users', () => {
    it('should fetch users', async () => {
      const response = await request(app).get('/api/users');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.arrayContaining([
        expect.objectContaining({ name: 'John Doe' }),
        expect.objectContaining({ name: 'Jane Smith' })
      ]));
    });
  });

  // Test for GraphQL API endpoint
  describe('GraphQL API', () => {
    it('should return hello message', async () => {
      const query = `
        {
          hello
        }
      `;
      const response = await request(app)
        .post('/api/graphql')
        .send({ query });
      expect(response.status).toBe(200);
      expect(response.body.data.hello).toBe('Hello, GraphQL!');
    });
  });

  // Test for gRPC-like API endpoint
  describe('gRPC-like API', () => {
    it('should return response message', async () => {
      const response = await request(app)
        .post('/api/grpc')
        .send({});
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Response from gRPC API');
    });
  });
});

afterAll(async () => {
  // Clean up tasks after all tests (e.g., closing server connections)
  await app.close(); // Assuming `app` has a `close` method to gracefully shut down the server
});
