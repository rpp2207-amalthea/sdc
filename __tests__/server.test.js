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

// const app = new express();
// app.use('/', initGetData);


describe('Testing Home Route', function () {
  const app = new express();
  app.use('/', initGetData.redirectFromHome);

  test('should redirect with status code 304', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(302);
  });


});


describe('Testing Reviews Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/getProductReviews', initGetData.getProductReviewsControl);

  test('should get status 200', async () => {
    const res = await request(app).get('/getProductReviews', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Product Styles Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/getProductStyles', initGetData.getProductStylesControl);

  test('should get status 200', async () => {
    const res = await request(app).get('/getProductStyles', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing ipRelated Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/ipRelated', initGetData.getRelatedProductCardControl);

  test('should get status 200', async () => {
    const res = await request(app).get('/ipRelated', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Product Review Meta Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/ipRelated', initGetData.getProductReviewMeta);

  test('should get status 200', async () => {
    const res = await request(app).get('/getProductReviewMeta', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Product QnA Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/getProductQnA', initGetData.getProductQnAControl);

  test('should get status 200', async () => {
    const res = await request(app).get('/getProductQnA', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Cart Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/getProductQnA', initGetData.getCart);

  test('should get status 200', async () => {
    const res = await request(app).get('/getCart', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});


describe('Testing Question Submission Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/submitQuestion', postData.postQuestionForm);

  test('should get status 200', async () => {
    const res = await request(app).post('/submitQuestion', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Img URL Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/uploadImg', postData.postImg);

  test('should get status 200', async () => {
    const res = await request(app).post('/uploadImg', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});


describe('Testing Submit Review Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/submitReview', postData.postReviewForm);

  test('should get status 200', async () => {
    const res = await request(app).post('/submitReview', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});


describe('Testing Submit Answer Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/submitAnswer', postData.postAnswerForm);

  test('should get status 200', async () => {
    const res = await request(app).post('/submitAnswer', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Click Track Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/clickTrackPost', postData.postClickTrack);

  test('should get status 200', async () => {
    const res = await request(app).post('/clickTrackPost', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Put Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/helpClick', putData.putHelpClick);

  test('should get status 200', async () => {
    const res = await request(app).put('/helpClick', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Delete Cart Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/deleteCart', deleteData.deleteCart);

  test('should get status 200', async () => {
    const res = await request(app).delete('/deleteCart');
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Report Review Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/reportClick', putData.putReportClick);

  test('should get status 200', async () => {
    const res = await request(app).put('/reportClick', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Helpful Question Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/helpfulQuestion', putData.questionHelpfulness);

  test('should get status 200', async () => {
    const res = await request(app).put('/helpfulQuestion', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Report Question Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/reportedQuestion', putData.questionReported);

  test('should get status 200', async () => {
    const res = await request(app).put('/reportedQuestion', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});

describe('Testing Helpful Answer Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/helpfulAnswer', putData.answerHelpfulness);

  test('should get status 200', async () => {
    const res = await request(app).put('/helpfulAnswer', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});


describe('Testing Report Answer Route', function () {
  const app = new express();
  const paramProductId = 71704;
  app.use('/reportAnswer', putData.answerReported);

  test('should get status 200', async () => {
    const res = await request(app).put('/reportAnswer', paramProductId);
    console.log('status code response:', res);
    expect(res.statusCode).toBe(200);
  });

});