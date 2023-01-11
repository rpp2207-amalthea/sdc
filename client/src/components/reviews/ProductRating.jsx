import React from 'react';
import { IoStarSharp, IoStarOutline, IoStarHalfSharp } from 'react-icons/io5';

const ProductRating = (props) => {
  var rating = props.rating;
  var ratingRoundDown = Math.floor(rating);

  const createStars = (number) => {
    var array = [];
    for (var i = 0; i < number; i++) {
      array.push(<IoStarSharp key={Math.random()}/>);
    };
    if (rating % 1 !== 0) {
      array.push(<IoStarHalfSharp key={Math.random()}/>)
      let remainingStarCount = Math.floor(5 - rating);
      for (var j = 0; j < remainingStarCount; j++) {
        array.push(<IoStarOutline key={Math.random()}/>);
      }
    } else {
      let remainingStarCount = 5 - rating;
      for (var k = 0; k < remainingStarCount; k++) {
        array.push(<IoStarOutline key={Math.random()}/>);
      }
    }
    return array;
  }
  var stars = createStars(ratingRoundDown);

  return (
    <div widgetname="Star Rating" className="number-of-stars">
      <span widgetname="Star Rating">{stars}</span>
    </div>
  )
}

export default ProductRating;