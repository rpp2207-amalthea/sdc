import React, {useState, useEffect} from 'react';
import StarRating from './StarRating.jsx';
import ImageUpload from './ImageUpload.jsx';

const ReviewForm = (props) => {
  const [rating, setRating] = useState(null);
  const [charsLeft, setMinCharsLeft] = useState(50);
  const [sizeRating, setSizeRating] = useState('');
  const [widthText, setWidthText] = useState('');
  const [comfortText, setComfortText] = useState('');
  const [qualityText, setQualityText] = useState('');
  const [lengthText, setLengthText] = useState('');
  const [fitText, SetFitText] = useState('');
  const [images, setImages] = useState([]);
  const [summaryDefault, setSummaryDefault] = useState('');
  const [bodyDefault, setBodyDefault] = useState('');

  const summaryClick = (event) => {
    setSummaryDefault(null);
  }

  const bodyClick = (event) => {
    setBodyDefault(null);
  }

  const handleCharCount = (event) => {
    const charCount = event.target.value.length;
    const curMinCharsLeft = 50 - charCount;
    setMinCharsLeft(curMinCharsLeft);
  }

  const charID = {};
  var charObj = props.meta.characteristics;

  const getCharID = () => {
    for (var characteristic in charObj) {
      charID[characteristic] = charObj[characteristic]["id"];
    }
    return charID;
  }

  getCharID();

  const handleSubmit = (event) => {
    event.preventDefault();
    const nickname = event.target.nickname.value;
    const email = event.target.email.value;
    const summary = event.target.summary.value;
    const body = event.target.body.value;

    var formObj = {
      product_id: props.id,
      rating: rating,
      summary: event.target.summary.value,
      body: event.target.body.value,
      recommend: undefined,
      name: event.target.nickname.value,
      email: event.target.email.value,
      photos: images,
      characteristics: {}
    }

    if (charID["Size"]) {
      formObj.characteristics[charID["Size"]] = Number(event.target.size.value);
    }
    if (charID["Width"]) {
      formObj.characteristics[charID["Width"]] = Number(event.target.width.value);
    }
    if (charID["Comfort"]) {
      formObj.characteristics[charID["Comfort"]] = Number(event.target.comfort.value);
    }
    if(charID["Quality"]) {
      formObj.characteristics[charID["Quality"]] = Number(event.target.quality.value);
    }
    if(charID["Length"]) {
      formObj.characteristics[charID["Length"]] = Number(event.target.length.value);
    }
    if(charID["Fit"]) {
      formObj.characteristics[charID["Fit"]] = Number(event.target.fit.value);
    }
    if(event.target.recommend.value) {
      formObj.recommend = true;
    } else {
      formObj.recommend = false;
    }

    props.handleFormSubmit(formObj);
  }

  const currRating = (rating) => {
    setRating(rating);
  }

  const size = {
    one: null,
    two: "1/2 a size too small",
    three: "Perfect",
    four: "1/2 a size too big",
    five: null
  }
  const sizeSelection = (string) => {
    var text = size[string];
    setSizeRating(text);
  }

  const width = {
    one: null,
    two: "Slightly narrow",
    three: "Perfect",
    four: "Slightly wide",
    five: null
  }
  const widthSelection = (string) => {
    var text = width[string];
    setWidthText(text);
  }

  const comfort = {
    one: null,
    two: "Slightly uncomfortable",
    three: "Ok",
    four: "Comfortable",
    five: null
  }
  const comfortSelection = (string) => {
    var text = comfort[string];
    setComfortText(text);
  }

  const quality = {
    one: null,
    two: "Below average",
    three: "What I expected",
    four: "Pretty great",
    five: null
  }
  const qualitySelection = (string) => {
    var text = quality[string];
    setQualityText(text);
  }

  const length = {
    one: null,
    two: "Runs slightly short",
    three: "Pefect",
    four: "Runs slighly long",
    five: null
  }
  const lengthSelection = (string) => {
    var text = length[string];
    setLengthText(text);
  }

  const fit = {
    one: null,
    two: "Runs slightly tight",
    three: "Perfect",
    four: "Runs slightly long",
    five: null
  }
  const fitSelection = (string) => {
    var text = fit[string];
    SetFitText(text);
  }


  const imageUploadHandler = (images) => {
    console.log('these are the uploaded images: ', images)
    //find a way to pass images into your inputs upon form submission
    setImages(images);
  }

  return (
    <div data-testid="review-form" widgetname="Review Form">
      <div widgetname="Review Form" className="form-title">
        <h2 widgetname="Review Form">Write Your Review</h2>
        <h3 widgetname="Review Form">About {props.productName}</h3>
      </div>
      <form widgetname="Review Form" className="review-form" onSubmit={handleSubmit}>
        <label>
          <h3>Overall Rating*</h3>
          <StarRating currRating={currRating}/>
          <input type="text" name="rating" value={rating} required hidden/>
        </label>
        <br></br>
        <label>
          <h3>Do you recommend this product?*</h3>
          <input type="radio" id="yes" name="recommend" value={true} required/>
          <label>yes</label>
          <input type="radio" id="no" name="recommend" value={false} required/>
          <label>no</label>
        </label>
          <br></br>
          <br></br>
        <label>
          <h3>Characteristics*</h3>
          {(charID["Size"] !== undefined) ?
          <>
            <h4>Size</h4>
            <fieldset className="characteristic-fields" data-testid="size">
              <p className="characteristic-text">{sizeRating}</p>
                <div className="radio-buttons">
                  <input type="radio" id="one" name="size" value="1" onClick={() => sizeSelection("one")}/>
                  <label for="one">1.</label>
                  <input type="radio" id="two" name="size" value="2" onClick={() => sizeSelection("two")}/>
                  <label for="two">2.</label>
                  <input type="radio" id="three" name="size" value="3" onClick={() => sizeSelection("three")}/>
                  <label for="three">3.</label>
                  <input type="radio" id="four" name="size" value="4" onClick={() => sizeSelection("four")}/>
                  <label for="four">4.</label>
                  <input type="radio" id="five" name="size" value="5" onClick={() => sizeSelection("five")}/>
                  <label for="five">5.</label>
                </div>
                <div className="hi-lo-group-text">
                  <div>A size too small</div>
                  <div>A size too wide</div>
                </div>
            </fieldset>
          </>
          : null}
          {(charID["Width"] !== undefined) ?
          <>
            <h4>Width</h4>
            <fieldset className="characteristic-fields" data-testid="width">
              <p className="characteristic-text">{widthText}</p>
                  <label className="radio-buttons">
                    <input type="radio" id="one" name="width" value="1" onClick={() => widthSelection("one")}/>
                    <label for="one">1.</label>
                    <input type="radio" id="two" name="width" value="2" onClick={() => widthSelection("two")}/>
                    <label for="two">2.</label>
                    <input type="radio" id="three" name="width" value="3" onClick={() => widthSelection("three")}/>
                    <label for="three">3.</label>
                    <input type="radio" id="four" name="width" value="4" onClick={() => widthSelection("four")}/>
                    <label for="four">4.</label>
                    <input type="radio" id="five" name="width" value="5" onClick={() => widthSelection("five")}/>
                    <label for="five">5.</label>
                  </label>
                  <div className="hi-lo-group-text">
                    <div>Too narrow</div>
                    <div>Too wide</div>
                  </div>
            </fieldset>
          </>
          : null}
          {(charID["Comfort"] !== undefined) ?
          <>
            <h4>Comfort</h4>
            <fieldset className="characteristic-fields" data-testid="comfort">
            <p className="characteristic-text">{comfortText}</p>
                <label className="radio-buttons">
                  <input type="radio" id="1" name="comfort" value="1" onClick={() => comfortSelection("one")}/>
                  <label>1.</label>
                  <input type="radio" id="2" name="comfort" value="2" onClick={() => comfortSelection("two")}/>
                  <label>2.</label>
                  <input type="radio" id="3" name="comfort" value="3" onClick={() => comfortSelection("three")}/>
                  <label>3.</label>
                  <input type="radio" id="4" name="comfort" value="4" onClick={() => comfortSelection("four")}/>
                  <label>4.</label>
                  <input type="radio" id="5" name="comfort" value="5" onClick={() => comfortSelection("five")}/>
                  <label>5.</label>
                </label>
                <div className="hi-lo-group-text">
                  <div>Uncomfortable</div>
                  <div>Perfect</div>
                </div>
            </fieldset>
          </>
          : null}
            {(charID["Quality"] !== undefined) ?
            <>
            <h4>Quality</h4>
            <fieldset className="characteristic-fields" data-testid="quality">
            <p className="characteristic-text">{qualityText}</p>
                <label className="radio-buttons">
                  <input type="radio" id="1" name="quality" value="1" onClick={() => qualitySelection("one")}/>
                  <label>1.</label>
                  <input type="radio" id="2" name="quality" value="2" onClick={() => qualitySelection("two")}/>
                  <label>2.</label>
                  <input type="radio" id="3" name="quality" value="3" onClick={() => qualitySelection("three")}/>
                  <label>3.</label>
                  <input type="radio" id="4" name="quality" value="4" onClick={() => qualitySelection("four")}/>
                  <label>4.</label>
                  <input type="radio" id="5" name="quality" value="5" onClick={() => qualitySelection("five")}/>
                  <label>5.</label>
                </label>
                <div className="hi-lo-group-text">
                  <div>Poor</div>
                  <div>Perfect</div>
                </div>
            </fieldset>
            </>
          : null}
            {(charID["Length"] !== undefined) ?
            <>
              <h4>Length</h4>
              <fieldset className="characteristic-fields" data-testid="length">
              <p className="characteristic-text">{lengthText}</p>
                  <label className="radio-buttons">
                    <input type="radio" id="1" name="length" value="1" onClick={() => lengthSelection("one")}/>
                    <label>1. Runs short</label>
                    <input type="radio" id="2" name="length" value="2" onClick={() => lengthSelection("two")}/>
                    <label>2.</label>
                    <input type="radio" id="3" name="length" value="3" onClick={() => lengthSelection("three")}/>
                    <label>3.</label>
                    <input type="radio" id="4" name="length" value="4" onClick={() => lengthSelection("four")}/>
                    <label>4.</label>
                    <input type="radio" id="5" name="length" value="5" onClick={() => lengthSelection("five")}/>
                    <label>5. Runs long</label>
                  </label>
                  <div className="hi-lo-group-text">
                    <div>Runs short</div>
                    <div>Runs long</div>
                  </div>
              </fieldset>
            </>
            : null}
            {(charID["Fit"] !== undefined) ?
            <>
              <h4>Fit</h4>
              <fieldset className="characteristic-fields" data-testid="fit">
              <p className="characteristic-text">{fitText}</p>
                    <label className="radio-buttons">
                      <input type="radio" id="1" name="fit" value="1" onClick={() => fitSelection("one")}/>
                      <label>1.</label>
                      <input type="radio" id="2" name="fit" value="2" onClick={() => fitSelection("two")}/>
                      <label>2.</label>
                      <input type="radio" id="3" name="fit" value="3" onClick={() => fitSelection("three")}/>
                      <label>3.</label>
                      <input type="radio" id="4" name="fit" value="4" onClick={() => fitSelection("four")}/>
                      <label>4.</label>
                      <input type="radio" id="5" name="fit" value="5" onClick={() => fitSelection("five")}/>
                      <label>5. Runs long</label>
                    </label>
                    <div className="hi-lo-group-text">
                      <div>Runs tight</div>
                      <div>Runs long</div>
                    </div>
              </fieldset>
            </>
          : null}
        </label>
        <br></br>
        <label>
          <h3>Review Summary</h3>
          <textarea onClick={summaryClick} placeholder="Example: Best Purchase Ever!" className="review-summary" type="text" name="summary" maxLength="60">
            {summaryDefault}
          </textarea>
        </label>
          <br></br>
          <br></br>
        <label>
          <h3>Review Body</h3>
          <textarea onClick={bodyClick} className="review-body" type="text" name="body" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" onChange={handleCharCount}>
            {bodyDefault}
          </textarea>
          {(charsLeft > 0) ? <p className="word-count"> Minimum required characters left: {charsLeft}</p> : null}
          {(charsLeft <= 0) ? <p className="word-count">Minimum reached</p> : null}
        </label>
        <label>
          <h3>Upload Your Photos</h3>
          <ImageUpload handleImages={imageUploadHandler}/>
        </label>
          <br></br>
          <br></br>
        <label>
          <strong>What is your nickname?*</strong>
          <input className="name-input" type="text" name="nickname" placeholder="Example: jackson11!" maxLength="60" required/>
          <h5>For privacy reasons, do not use your full name or email address</h5>
        </label>
        <label>
          <strong>Your Email*</strong>
          <input className="email-input" type="email" name="email" placeholder="Example: jackson11@email.com" maxLength="60" required/>
          <h5>For authentication reasons, you will not be emailed</h5>
        </label>
        <button widgetname="Review Form" className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default ReviewForm