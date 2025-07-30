const request = require('supertest');
const app = require('../../src/api/server');

describe('API Integration', () => {
test('POST /api/allergy/detect', async () => {
const res = await request(app)
.post('/api/allergy/detect')
.send({ image: "base64data" });
expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('allergy');
});

test('POST /api/record/save', async () => {
const res = await request(app)
.post('/api/record/save')
.set('Authorization', 'token')
.send({ data: "health info" });
expect(res.statusCode).toBe(200);
expect(res.body).toHaveProperty('recordId');
});
});

