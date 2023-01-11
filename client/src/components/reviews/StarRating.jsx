import React, { useState, useRef } from 'react';
// import { BsStar } from 'react-icons/bs';

const StarRating = (props) => {

  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleRating = (idx) => {
    setRating(idx);
    props.currRating(idx);
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index+= 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            id="star-rating"
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
      <div className="rating-text">
        {(rating === 1) ? <p>Poor</p> : null}
        {(rating === 2) ? <p>Fair</p> : null}
        {(rating === 3) ? <p>Average</p> : null}
        {(rating === 4) ? <p>Good</p> : null}
        {(rating === 5) ? <p>Great</p> : null}
      </div>
    </div>
  )
}

export default StarRating;