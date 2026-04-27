const request = require('supertest');

// Mock environment variables
process.env.MONGO_HOST = 'localhost';
process.env.MONGO_PORT = '27017';
process.env.MONGO_DB = 'REST_DEMO_TEST';
process.env.PORT = '3000';

// Create a simple Express app for testing
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes
const routes = require('../routes');
const user = require('../routes/user');

// Setup routes
app.get('/', routes.index);
app.post('/user/addTwoNumber', user.addTwoNumber);

describe('API Endpoints', () => {
  describe('GET /', () => {
    it('should return API info', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('name');
      expect(res.body).toHaveProperty('version');
      expect(res.body).toHaveProperty('status', 'running');
    });
  });

  describe('POST /user/addTwoNumber', () => {
    it('should add two numbers correctly', async () => {
      const res = await request(app)
        .post('/user/addTwoNumber')
        .send({ numberA: '10', numberB: '20' });

      expect(res.statusCode).toBe(200);

      // Parse the response text as JSON (API sends JSON as string)
      const data = JSON.parse(res.text);
      expect(data).toHaveProperty('isSuccess', true);
      expect(data).toHaveProperty('sum', 30);
    });

    it('should handle string numbers', async () => {
      const res = await request(app)
        .post('/user/addTwoNumber')
        .send({ numberA: '5', numberB: '15' });

      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data.sum).toBe(20);
    });

    it('should handle negative numbers', async () => {
      const res = await request(app)
        .post('/user/addTwoNumber')
        .send({ numberA: '-10', numberB: '30' });

      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data.sum).toBe(20);
    });

    it('should handle zero', async () => {
      const res = await request(app)
        .post('/user/addTwoNumber')
        .send({ numberA: '0', numberB: '0' });

      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      expect(data.sum).toBe(0);
    });

    it('should handle decimal numbers (truncates to integer)', async () => {
      const res = await request(app)
        .post('/user/addTwoNumber')
        .send({ numberA: '2.5', numberB: '3.5' });

      expect(res.statusCode).toBe(200);
      const data = JSON.parse(res.text);
      // API uses parseInt(), so 2.5 + 3.5 becomes 2 + 3 = 5
      expect(data.sum).toBe(5);
      expect(data.isSuccess).toBe(true);
    });
  });
});
