var ExpandedImage = (props) => {
  return (
    <div>
      <img src={props.url} alt="photo" widgetname="Questions/Answers" className="question-thumbnail-popup"/>
    </div>
  );
}

export default ExpandedImage;