import React, {useState}  from 'react';
import Popup from '../Popup.jsx';
import ExpandedImage from './ExpandedImage.jsx';
import axios from 'axios';

var Answer = (props) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [imgLink, setImgLink] = useState('');
  const [isImageExpanded, setIsImageExpanded] = useState(false);


  var currentAnswer = props.data;

  var answerDate = new Date(currentAnswer.date).toDateString();

  var imageArray = currentAnswer.photos;

  var toggleHelpfulness = () => {
        setIsHelpful(!isHelpful);
        axios.put('/helpfulAnswer', {answer_id: currentAnswer.id})
        .then(success => {
          console.log('Success making answer helpful:', success)
        })
        .catch(err => {
          console.log('Error making answer helpful:', err);
        });
      }

      var toggleReport = () => {
        setIsReported(!isReported);
        axios.put('/reportAnswer', {answer_id: currentAnswer.id})
        .then(success => {
          console.log(success);
        })
        .catch(err => {
          console.log('Error reporting answer', err);
        })
      }

      const toggleImageExpand = (link) => {
        setIsImageExpanded(!isImageExpanded);
        setImgLink(link)
      }

      return (
        <div style={{marginBottom:"1.2em"}} widgetname="Questions/Answers">
          <h3 style={{display: "inline"}} widgetname="Questions/Answers">A:</h3> <div style={{display: "inline"}}>{currentAnswer.body}</div>
          <p widgetname="Questions/Answers"> <span style={{fontSize:".8em", color: 'gray'}}>by {currentAnswer.answerer_name.indexOf('Seller') > -1 ? <b>{currentAnswer.answerer_name}</b> : currentAnswer.answerer_name}, {answerDate}  |  Helpful? </span>{isHelpful ? <a widgetname="Questions/Answers">Yes({currentAnswer.helpfulness + 1})</a> : <a onClick={toggleHelpfulness} className="hyperlink" widgetname="Questions/Answers">Yes({currentAnswer.helpfulness})</a> } |  {isReported ? <a widgetname="Questions/Answers"> REPORTED </a> : <a onClick={toggleReport} className="hyperlink" widgetname="Questions/Answers">Report Answer</a>}</p>
          <div>
            {currentAnswer.photos.length ? currentAnswer.photos.map((photo, index) => {
              return(
                <div key={index}>
                  <img className="answer-image"src={photo} alt="photo" widgetname="Questions/Answers" onClick={() => toggleImageExpand(photo)}/>
                  {isImageExpanded && <Popup handleClose={toggleImageExpand} content={<ExpandedImage url={imgLink}/>}/>}
                </div>
              );
            }) : null }
          </div>
        </div>
      );
}

export default Answer;