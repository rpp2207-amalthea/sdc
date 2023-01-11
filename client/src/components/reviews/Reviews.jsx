import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Popup from '../Popup.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = (props) => {
  var incomingList = props.reviewList;
  var numReviews = incomingList.length;
  var productInfo = props.product;
  var meta = props.meta;

  const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [starFilterToggle, setStarFilterToggle] = useState(false);
  const [starReviews, setStarReviews] = useState([]);

  const [fiveStar, setFiveStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [oneStar, setOneStar] = useState(false);

  useEffect(() => {
    if (fiveStar || fourStar || threeStar || twoStar || oneStar) {
      setStarFilterToggle(true);
    } else {
      setStarFilterToggle(false);
    }

  },[starReviews]);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const useForceUpdate = () => {
    const [value, setValue] = useState([]);
    return () => setValue(value => props.reviewList);
  }

  const clearFilters = () => {
    setFiveStar(false);
    setFourStar(false);
    setThreeStar(false);
    setTwoStar(false);
    setOneStar(false);
    setStarFilterToggle(false);
    setStarReviews([]);
  }

  const forceUpdate = useForceUpdate();

  const handleFormSubmit = (object) => {
    // console.log('this is the form object:', object);
    var revSubmission = object;
    axios.post('/submitReview', revSubmission)
    .then((success) => {
      toast("Thank you for submitting your review!")
      setIsOpen(false);
      forceUpdate();
    })
    .catch((err) => {
      console.error('Error submitting post: ', err);
    });
  }

  const handleHelpClick = (review_id) => {
    // console.log('this is the review id: ', {review_id: review_id});
    axios.put('/helpClick', {review_id: review_id})
    .then((success) => {
      console.log('successful PUT req:', success)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const handleReportClick = (review_id) => {
    // console.log('this is the review id: ', {review_id: review_id});
    axios.put('/reportClick', {review_id: review_id})
    .then((success) => {
      console.log('successful PUT req:', success)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const relevance = async () => {
    var sorted = await incomingList.sort((p1, p2) => {
      return ((new Date(p2.date) - new Date(p1.date)) && (p2.helpfulness - p1.helpfulness));
    })
    var sortedCopy = [...sorted];
    props.updateReviewList(sortedCopy);
    forceUpdate();
  }

  const newest = async () => {
    var sorted = await incomingList.sort((p1, p2) => {
      return (new Date(p2.date) - new Date(p1.date));
    })
    var sortedCopy = [...sorted];
    props.updateReviewList(sortedCopy);
    forceUpdate();
  }

  const helpfulness = async () => {
    var sorted = await incomingList.sort((p1, p2) => {
      return (p2.helpfulness - p1.helpfulness);
    })
    var sortedCopy = [...sorted];
    props.updateReviewList(sortedCopy);
    forceUpdate();
  }

  const sortBy = (event) => {
    if (event.target.value === "relevance") {
      relevance();
    }
    if (event.target.value === "newest") {
      newest();
    }
    if (event.target.value === "helpfulness") {
      helpfulness();
    }
  }


  const defaultList = incomingList.slice(0);
  let updatedReviewList = [...starReviews];

  const starSort = (value) => {
    if (value === 5) {
      if (!fiveStar) {
        defaultList.forEach((review) => {
          if (review.rating === 5) {
            updatedReviewList.push(review);
          }
        });
      }
      if (fiveStar) {
        updatedReviewList.forEach((review, index) => {
          if (review.rating === 5) {
            updatedReviewList.splice(index, 1);
          }
        });
      }
      setFiveStar(!fiveStar); // it's async, boo annoying
    }
    if (value === 4) {
      if (!fourStar) {
        defaultList.forEach((review) => {
          if (review.rating === 4) {
            updatedReviewList.push(review);
          }
        });
      }
      if (fourStar) {
        updatedReviewList.forEach((review, index) => {
          if (review.rating === 4) {
            updatedReviewList.splice(index, 1);
          }
        });
      }
      setFourStar(!fourStar);
    }
    if (value === 3) {
      if (!threeStar) {
        defaultList.forEach((review) => {
          if (review.rating === 3) {
            updatedReviewList.push(review);
          }
        });
      }
      if (threeStar) {
        updatedReviewList.forEach((review, index) => {
          if (review.rating === 3) {
            updatedReviewList.splice(index, 1);
          }
        });
      }
      setThreeStar(!threeStar);
    }
    if (value === 2) {
      if (!twoStar) {
        defaultList.forEach((review) => {
          if (review.rating === 2) {
            updatedReviewList.push(review);
          }
        });
      }
      if (twoStar){
        updatedReviewList.forEach((review, index) => {
          if (review.rating === 2) {
            updatedReviewList.splice(index, 1);
          }
        });
      }
      setTwoStar(!twoStar);
    }
    if (value === 1) {
      if (!oneStar) {
        defaultList.forEach((review) => {
          if (review.rating === 1) {
            updatedReviewList.push(review);
          }
        });
      }
      if (oneStar) {
        updatedReviewList.forEach((review, index) => {
          if (review.rating === 1) {
            updatedReviewList.splice(index, 1);
          }
        });
      }
      setOneStar(!oneStar);
    }
    setStarReviews(updatedReviewList);
  }

  return (
    <div id="reviews" widgetname="Ratings/Reviews" className="review-module section" data-testid="reviews-module">
      <div widgetname="Ratings/Reviews" className="rating-breakdown">
        <RatingBreakdown rating={props.rating} meta={meta} reviewList={props.reviewList} starSort={starSort} fiveStar={fiveStar} fourStar={fourStar} threeStar={threeStar} twoStar={twoStar} oneStar={oneStar} toggle={starFilterToggle} clear={clearFilters}/>
      </div>
      <div className="reviewList" widgetname="Ratings/Reviews">
        <h3 widgetname="Ratings/Reviews" className="reviewList-title">
          {numReviews} reviews, sorted by &nbsp;
          <select widgetname="Ratings/Reviews-Sort" name="sort-options" className="reviewList-sort-button" onChange={sortBy}>
            <option widgetname="Ratings/Reviews-Sort" value="relevance" defaultValue>relevance</option>
            <option widgetname="Ratings/Reviews-Sort" value="newest">newest</option>
            <option widgetname="Ratings/Reviews-Sort" value="helpfulness">helpfulness</option>
          </select>
        </h3>
        <ReviewList handleHelpClick={handleHelpClick} handleReportClick={handleReportClick} reviewList={starFilterToggle ? starReviews : incomingList} togglePopup={togglePopup}/>
      </div>
      {isOpen && <Popup
        content={<>
          <ReviewForm handleFormSubmit={handleFormSubmit} id={productInfo.id} productName={productInfo.name} meta={meta}/>
        </>}
        handleClose={togglePopup}
      />}
  </div>
  )
}

export default Reviews
