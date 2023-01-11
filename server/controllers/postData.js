const axios = require('axios');
const cloudinary = require('../cloudinary');
const uploader = require('../multer');

exports.postReviewForm = (req, res) => {

  var incomingReview = req.body;
  console.log('this is the incoming review: ', incomingReview);

  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews`,
    headers: { Authorization: process.env.AUTH_SECRET },
    "Content-Type": 'application/json',
    data: incomingReview
  };
  axios(options)
  .then((results) => {
    var created = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(created);
  })
  .catch((error) => {
    console.log('failure in the api server: ', error);
    res.status(500).send(error);
  });
}
exports.postQuestionForm = (req, res) => {
  var incomingQuestion = req.body;
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions`,
    headers: {Authorization: process.env.AUTH_SECRET},
    "Content-Type": 'application/json',
    data: incomingQuestion
  }
  axios(options)
  .then(results => {
    console.log('Success: ',results.data);
    var created = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(created);
  })
  .catch(err => {
    console.log('failure in the  Question api server: ', err);
    res.status(500).send(err)
  })
}

exports.postAnswerForm = (req, res) => {
  var incomingAnswer = req.body;
  var questionId = incomingAnswer.questionId;
  delete incomingAnswer.questionId;
  const options = {
    method: 'POST',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/answers`,
    headers: {Authorization: process.env.AUTH_SECRET},
    "Content-Type": 'application/json',
    data: incomingAnswer
  }
  axios(options)
  .then(results => {
    console.log('Success: ', results.data);
    var created = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(created)
  })
  .catch(err => {
    console.log('failure in the Answer api server: ', err);
    res.status(500).send(err)
  })
}

exports.postClickTrack = (req, res) => {

  var clickTrackData = req.body;

  var options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
    method: 'POST',
    headers: { Authorization: process.env.AUTH_SECRET },
    "Content-Type": 'application/json',
    data: clickTrackData
  };

  axios(options)
  .then((results) => {
    var clickTrackSuccess = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(clickTrackSuccess);
  })
  .catch((error) => {
    console.log('failure in the api click track server: ', error);
    res.status(500).send(error);
  });
}

exports.postImg = (req, res) => {
  var imgFile = req.files[0].path;

  cloudinary.v2.uploader.upload(imgFile)
  .then((results) => {
    var imgURL = results.url;
    console.log('success POST img url: ', imgURL);
    res.status(201).send(JSON.parse(JSON.stringify(imgURL)));
  })
  .catch((error) => {
    console.log('error getting img url', error);
    res.status(500).send(error);
  });
}

exports.postAddToCart = (req, res) => {

  var cartData = req.body.params;

  var options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart',
    method: 'POST',
    headers: { Authorization: process.env.AUTH_SECRET },
    "Content-Type": 'application/json',
    data: cartData
  };

  axios(options)
  .then((results) => {
    var cartSuccess = JSON.parse(JSON.stringify(results.data));
    res.status(201).send(cartSuccess);
  })
  .catch((error) => {
    console.log('failure in the api add to cart: ', error);
    res.status(500).send(error);
  });
}

