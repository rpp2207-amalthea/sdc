import React, {useState} from 'react';

var NewQuestionForm = (props) => {

  const handleSubmit = (event) => {
    var formObj = {
      body: event.target.question.value,
      name: event.target.user.value,
      email: event.target.email.value,
      product_id: props.id
    }
    event.preventDefault();
    props.handleFormSubmit(formObj);
  }
  return (
    <div widgetname="Questions/Answers">
      <h3 widgetname="Questions/Answers">Ask Your Question</h3>
      <h4>About the {props.productName}</h4>
      <form onSubmit={handleSubmit} widgetname="Questions/Answers">
        <label for="question" widgetname="Questions/Answers">Question:</label><br></br>
        <textarea name="question" maxLength="1000" widgetname="Questions/Answers" required></textarea><br></br><br></br>
        <label for="user" widgetname="Questions/Answers">Username: </label><br></br>
        <input type="text" name="user" id="user" maxLength="60" widgetname="Questions/Answers" placeholder="Example: jackson11!" required/><br></br><br></br>
        <b widgetname="Questions/Answers">For privacy reasons, do not use your full name or email address.</b><br></br><br></br>
        <label for="email" widgetname="Questions/Answers">Email:</label><br></br>
        <input type="email" name="email" id="email" placeholder="Why did you like this product or not?" maxLength="60" widgetname="Questions/Answers" required/><br></br><br></br>
        <b widgetname="Questions/Answers">For authentication reasons, you will not be emailed.</b><br></br>
        <input type="submit" className="submit-button"/>
      </form>
    </div>
  );
}

export default NewQuestionForm;