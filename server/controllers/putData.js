const axios = require('axios');

exports.putHelpClick = (req, res) => {

  const review_id = req.body.review_id;
  console.log('review id in server helpClick: ', review_id);

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/helpful`,
    headers: { Authorization: process.env.AUTH_SECRET },
    // data: review_id
  };
  axios(options)
  .then((results) => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch((error) => {
    console.log('helpful server error: ', error);
    res.status(500).send(error);
  });

};

exports.putReportClick = (req, res) => {

  const review_id = req.body.review_id;
  console.log('review id in server reportClick: ', review_id);

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${review_id}/report`,
    headers: { Authorization: process.env.AUTH_SECRET },
    // data: review_id
  };
  axios(options)
  .then((results) => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch((error) => {
    console.log('report server error: ', error);
    res.status(500).send(error);
  });

};

exports.questionHelpfulness = (req, res) => {
  var questionId = req.body.question_id;

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/helpful`,
    headers: {Authorization: process.env.AUTH_SECRET},
  };

  axios(options)
  .then(results => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch(err => {
    console.log('Error recording helpfulness:', err);
    res.status(500).send(err);
  });
}

exports.questionReported = (req, res) => {
  var questionId = req.body.question_id;

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${questionId}/report`,
    headers: {Authorization: process.env.AUTH_SECRET}
  };

  axios(options)
  .then(results => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch(err => {
    console.log('Error recording reported:', err);
    res.status(500).send(err);
  })
}

exports.answerHelpfulness = (req, res) => {
  var answerId = req.body.answer_id;

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/helpful`,
    headers: {Authorization: process.env.AUTH_SECRET}
  };

  axios(options)
  .then(results => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch(err => {
    console.log('Error recording helpfulness:', err);
    res.status(500).send(err)
  })
}

exports.answerReported = (req,res) => {
  var answerId = req.body.answer_id;

  const options = {
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/${answerId}/report`,
    headers: {Authorization: process.env.AUTH_SECRET}
  };

  axios(options)
  .then(results => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch(err => {
    console.log('Server error reporting answer:', err);
    res.status(500).send(err);
  })
}

exports.deleteCart = (req,res) => {

  const options = {
    method: 'DELETE',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart`,
    headers: {Authorization: process.env.AUTH_SECRET}
  };

  axios(options)
  .then(results => {
    var data = JSON.parse(JSON.stringify(results.data));
    res.status(204).send(data);
  })
  .catch(err => {
    console.log('Server error Delete cart:', err);
    res.status(500).send(err);
  })
}

