var request = require('request');
// var expect = require('chai').expect;
var sinon = require('sinon');
// import React, {useEffect, useState} from 'react';
// import { render } from '@testing-library/react';
// import sinon from 'sinon';
// import { spy } from 'sinon';
// import Reviews from '../client/src/components/Reviews.jsx';

// describe('SERVER TESTS:', function() {

//   it('should respond to GET requests for INIT /getProducts with a 200 status code', function(done) {
//     request('http://127.0.0.1:3000/getProductGeneralInfo', function(error, response, body) {
//       expect(response.statusCode).to.equal(200);
//       done();
//     });
//   });

// });

jest.dontMock('../client/src/App.jsx');

describe('Testing Helper Functions: ', function () {

  it('returns average of Ratings from a list: ', function () {

    var average = require('../client/src/App.jsx');
    var listOfRatings = [
      {rating: 3},
      {rating: 4},
      {rating: 5}
    ]
    var expectedAverage = 4;
    var averageOfList = average.getAverageRating(listOfRatings);

    expect(averageOfList).toBe(expectedAverage);

  });

});