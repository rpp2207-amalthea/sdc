// EXPRESS SERVER Index

require('dotenv').config();
const express = require ("express");
const axios = require ('axios')
const app = express();
const cors = require("cors");
const initGetData = require("./controllers/initGetData.js");
const postData = require('./controllers/postData.js');
const putData = require('./controllers/putData.js');
//for image uploads
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

const deleteData = require('./controllers/deleteData.js');
const compression = require('compression');

app.use(express.json());
app.use(cors()); // Not sure if needed
app.use(compression())
app.use(express.urlencoded({ extended: false }));

app.use('/ip/:id', express.static(__dirname + '/../client/dist'));
app.listen(3000, () => console.log('Our Server is listening on port 3000...'));

// ROUTES

app.get('/', initGetData.redirectFromHome);

app.get('/ipCurrent', initGetData.getCurrentProductCardControl);
// app.get('/ip/:id', initGetData.getCurrentProductCardControl);

app.get('/ipRelated', initGetData.getRelatedProductCardControl);

app.get('/getProductStyles', initGetData.getProductStylesControl);

app.get('/getProductRelated', initGetData.getProductRelatedControl);

app.get('/getProductReviews', initGetData.getProductReviewsControl);

app.get('/getProductReviewMeta', initGetData.getProductReviewMeta);

app.get('/getProductQnA', initGetData.getProductQnAControl);

app.post('/uploadImg', upload.any(), postData.postImg);

app.get('/getCart', initGetData.getCart);

app.post('/submitReview', postData.postReviewForm);

app.post('/submitQuestion', postData.postQuestionForm);

app.post('/submitAnswer', postData.postAnswerForm);

app.post('/clickTrackPost', postData.postClickTrack);

app.post('/addToCart', postData.postAddToCart);

app.delete('/deleteCart', deleteData.deleteCart);

app.put('/helpClick', putData.putHelpClick);

app.put('/reportClick', putData.putReportClick);

app.put('/helpfulQuestion', putData.questionHelpfulness);

app.put('/reportedQuestion', putData.questionReported);

app.put('/helpfulAnswer', putData.answerHelpfulness);

app.put('/reportAnswer', putData.answerReported);

