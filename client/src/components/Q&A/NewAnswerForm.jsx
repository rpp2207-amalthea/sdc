import {useState} from 'react';
import ImageUpload from '../reviews/ImageUpload.jsx';

var NewAnswerForm = (props) => {

  const [images, setImages] = useState([]);

  const handleSubmit = (event) => {
    var formObj = {
      body: event.target.answer.value,
      name: event.target.user.value,
      email: event.target.email.value,
      photos: images,
      questionId: props.questionId
    }

    event.preventDefault();
    props.handleFormSubmit(formObj);
  }

  const imageUploadHandler = (images) => {
    console.log('This is the amount of images that I have: ', images);
    setImages(images);
  }
  return (
    <div widgetname="Questions/Answers">
      <h3 widgetname="Questions/Answers">Submit Your Answer</h3>
      <h4 widgetname="Questions/Answers">{props.productName} : {props.currentQuestion}</h4>
      <form onSubmit={handleSubmit} widgetname="Questions/Answers">
        <label for="answer" widgetname="Questions/Answers">Answer:</label><br></br>
        <textarea name="answer" id="answer" maxLength="1000" widgetname="Questions/Answers" required></textarea><br></br><br></br>
        <label for="user" widgetname="Questions/Answers">Username:</label><br></br>
        <input type="text" name="user" id="user" maxLength="60" widgetname="Questions/Answers" placeholder="Example:jack543!" required/><br></br><br></br>
        <b widgetname="Questions/Answers">For privacy reasons, do not use your full name or email address.</b><br></br><br></br>
        <label for="email" widgetname="Questions/Answers">Email:</label><br></br>
        <input type="email" name="email" id="email" maxLength="60" placeholder="Example: jack@email.com" widgetname="Questions/Answers" required/><br></br><br></br>
        <b widgetname="Questions/Answers">For authentication reasons, you will not emailed.</b><br></br><br></br>
        <label widgetname="Questions/Answers">Upload Photos Here:</label><br></br>
        <ImageUpload handleImages={imageUploadHandler}/>
        <input type="submit" widgetname="Questions/Answers" className="submit-button"/>
      </form>
    </div>
  );
}

export default NewAnswerForm;