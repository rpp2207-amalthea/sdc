const axios = require('axios');

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

