import React, {useState} from 'react';
import AnswerList from './AnswerList.jsx';
import Popup from '../Popup.jsx';
import NewAnswerForm from './NewAnswerForm.jsx';
import axios from 'axios';

var Question = (props) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  var currentQuestion = props.data;
  var questionHelpfulness = currentQuestion.question_helpfulness;

  const toggleAnswerPopup = () => {
    setIsAnswerOpen(!isAnswerOpen);
  }

  const toggleHelpfulness = () => {
    questionHelpfulness += 1;
    setIsHelpful(!isHelpful);
    axios.put('/helpfulQuestion', {question_id: currentQuestion.question_id})
    .then(success => {
      console.log(success);
    })
    .catch(err => {
      console.log('Error requesting helpful', err);
    })
  }

  const toggleReported = () => {
    setIsReported(!isReported);
    axios.put('/reportedQuestion', {question_id: currentQuestion.question_id})
    .then(success => {
      console.log(success);
    })
    .catch(err => {
      console.log('Error requesting reported', err);
    })
  }

  const handleAnswerFormSubmit = (object) => {
    console.log('This is my submission object: ', object);
    var submittedAnswer = object;
    axios.post('/submitAnswer', submittedAnswer)
    .then(success => {
      console.log(success)
    })
    .catch(err => {
      console.log('Error posting form', err);
    })
  }

  return (
    <div style={{marginBottom: "1.5em"}}  widgetname="Questions/Answers">
      <div style={{margin: "2em 0em 1.2em 0em"}}><h3 style= {{display: "inline"}} widgetname="Questions/Answers">Q:</h3> <p style= {{display: "inline"}}>{currentQuestion.question_body}</p>
        <div style= {{display: "inline", float: "right"}} className="question-below-bar" widgetname="Questions/Answers">
          <div widgetname="Questions/Answers"><span style={{fontSize:".8em"}}>Helpful?</span> {isHelpful ? <a widgetname="Questions/Answers">Yes ({questionHelpfulness + 1})</a> : <a onClick={toggleHelpfulness} className="hyperlink" widgetname="Questions/Answers">Yes ({questionHelpfulness})</a>} | <a onClick={toggleAnswerPopup} className="hyperlink" widgetname="Questions/Answers">Add An Answer</a> | {(isReported) ? <a widgetname="Questions/Answers">Reported</a> : <a onClick={toggleReported} widgetname="Questions/Answers" className="hyperlink">Report Question</a>}</div>
      </div>
    </div>
      <AnswerList answers={currentQuestion.answers}/>
      <div>
        {isAnswerOpen && <Popup handleClose={toggleAnswerPopup} content={<NewAnswerForm currentQuestion={currentQuestion.question_body} productName={props.product.name} questionId={currentQuestion.question_id} handleFormSubmit={handleAnswerFormSubmit}/>}/>}
      </div>
    </div>
  );

}

export default Question;