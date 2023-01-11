import React from 'react';
import ProductRating from './ProductRating.jsx';
import CharacteristicsBreakdown from './CharacteristicsBreakdown.jsx';
import PercentageBar from './PercentageBar.jsx';

const RatingBreakdown = (props) => {
  var reviewList = props.reviewList;
  var numReviews = reviewList.length;
  var numRecommend = 0;
  var meta = props.meta;
  var metaArr = [];

  const metaLowHi = {
    Size: ['Too small', 'Too wide'],
    Width: ['Too narrow', 'Too wide'],
    Comfort: ['Uncomfortable', 'Perfect'],
    Quality: ['Poor', 'Perfect'],
    Length: ['Runs short', 'Runs long'],
    Fit: ['Runs tight', 'Runs long']
  }

  const ratingPercentage = {
    1: [0],
    2: [0],
    3: [0],
    4: [0],
    5: [0]
  };

  const getPercentage = (tally) => {
    return (tally / numReviews) * 100
  }

  const getAllPercentage = (array) => {
    array.forEach((review) => {
      if (review.recommend) {
        numRecommend++
      }
      ratingPercentage[review.rating][0]++
    });
    for (var rating in ratingPercentage) {
      var percentage = getPercentage(ratingPercentage[rating]);
      ratingPercentage[rating].push(percentage);
    }
    return ratingPercentage;
  }

  const getAllCharacteristics = (obj) => {
    for (var characteristic in obj) {
      metaArr.push([characteristic, Number(obj[characteristic]["value"])]);
    }
    return metaArr;
  }
  getAllCharacteristics(meta.characteristics);
  var currPercentageArr = Object.values(getAllPercentage(reviewList));

  return (
    <div>
      <p widgetname="Review/Rating-Breakdown">RATINGS & REVIEWS</p>
      <div widgetname="Review/Average-Star-Rating" className="average-stars">
        <h2 widgetname="Review/Average-Star-Rating" className="average-number" data-testid="average-number">{props.rating}</h2>
        <div widgetname="Review/Average-Star-Rating" data-testid="average-stars">
          <ProductRating rating={props.rating}/>
        </div>
      </div>
      <div>
        <h3 widgetname="Review/Star-Rating-Breakdown">Rating Breakdown</h3>
        <p widgetname="Review/Star-Rating-Breakdown">{Math.floor((numRecommend / numReviews) * 100)}% of reviews recommend this product</p>
        <div widgetname="Review/Star-Rating-Filter" className="filter-label-group">
          {(props.fiveStar) ? <div widgetname="Review/Star-Rating-Filter" className="filter-label" onClick={() => props.starSort(5)}>5 Star</div> : null}
          {(props.fourStar) ? <div widgetname="Review/Star-Rating-Filter" className="filter-label" onClick={() => props.starSort(4)}>4 Star</div> : null}
          {(props.threeStar) ? <div widgetname="Review/Star-Rating-Filter" className="filter-label" onClick={() => props.starSort(3)}>3 Star</div> : null}
          {(props.twoStar) ? <div widgetname="Review/Star-Rating-Filter" className="filter-label" onClick={() => props.starSort(2)}>2 Star</div> : null}
          {(props.oneStar) ? <div widgetname="Review/Star-Rating-Filter" className="filter-label" onClick={() => props.starSort(1)}>1 Star</div> : null}
          {(props.toggle === true) ? <div widgetname="Review/Star-Rating-Filter" className="filter-label" onClick={props.clear}>Clear</div> : null}
        </div>
          <div widgetname="Review/Star-Rating-Breakdown" className="star-bars">
            {currPercentageArr.slice(0).reverse().map((rating, idx) => {
            let currStar = currPercentageArr.length - idx;
            return <div widgetname="Review/Star-Rating-Breakdown" className="star-bar" key={idx}><div widgetname="Review/Star-Rating-Breakdown" onClick={() => props.starSort(currStar)} className="bar">{currStar} stars
            <PercentageBar bgcolor={'#59981A'} completed={rating[1]}/>{rating[0]} reviews</div></div>
            })}
          </div>
      </div>
          <div widgetname="Review/Characteristics-Breakdown" className="characteristic-bars" data-testid="characteristic-bars">
            {metaArr.map((review, idx) => (
              // return
              <div widgetname="Review/Characteristics-Breakdown" key={idx}>
                <p widgetname="Review/Characteristics-Breakdown" className="char-title">{review[0]}</p>
                <div widgetname="Review/Characteristics-Breakdown" className="char-bar">
                  <CharacteristicsBreakdown completed={review[1] * 10}/>
                  <div widgetname="Review/Characteristics-Breakdown" className="hiLo">
                    <p widgetname="Review/Characteristics-Breakdown">{metaLowHi[review[0]][0]}</p>
                    <p widgetname="Review/Characteristics-Breakdown">{metaLowHi[review[0]][1]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
export default RatingBreakdown;