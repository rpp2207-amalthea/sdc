/**
 * @jest-environment node
 */

import request from 'supertest';
import express from 'express';
import index from ''
import initGetData from "../server/controllers/initGetData.js";
import postData from '../server/controllers/postData.js';
import putData from'../server/controllers/putData.js';
import deleteData from'../server/controllers/deleteData.js';

describe('Testing Home Route', function () {
  const app = new express();
  app.use('/', initGetData.redirectFromHome);

  test('should redirect with status code 304', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(302);
  });

});
