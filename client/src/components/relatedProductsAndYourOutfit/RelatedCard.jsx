import React, { useState, useEffect } from 'react';
import Popup from '../Popup.jsx';
import ComparisonTable from './ComparisonTable.jsx';
import ProductRating from '../reviews/ProductRating.jsx';
import axios from 'axios';
// import getAverageRating from '../../index.jsx';
import { getAverageRating } from '../../App.jsx';


const RelatedCard = React.forwardRef((props, ref) => {

  // const [formView, setFormView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(true);
  const [ratingRelatedCard, setRatingRelatedCard] = useState(0);

  useEffect(() => {
    axios.get('/getProductReviews', { params: { id: props.related_id } })
      .then(function (response) {
        var reviews = response.data.results;
        var average = getAverageRating(reviews);
        setRatingRelatedCard(average);
      })
      .catch(function (error) {
      })
  }, []);

  const togglePopup = (event) => {
    event.stopPropagation();
    // event.stopImmediatePropagation();
    setIsOpen(!isOpen);
  }

  var combineRelatedFeatures = [];

  // Object entries/values (look into)
  for (var key in props) {
    if (key.length === 1) {
      combineRelatedFeatures.push(props[key]);
    }
  }

  var onClickNavigate = (e) => {
    // console.log("🚀 ~ file: RelatedCard.jsx:44 ~ onClickNavigate ~ e", e)
    // e.preventDefault();
    props.onClickNavigateToNewProductPage(props.related_id);
  }

  const hideImgWhenError = (e) => {
    if (imgError) {
      setImgError(false);
      e.target.src = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
    };
  }

  return (
    <div widgetname="Related/YourOutfit" className='productCard' ref={ref} data-testid='testRelatedCard'>
      {isOpen && <Popup
        content={<>
          <ComparisonTable related_name={props.related_name} featuresPrimaryProductString={props.featuresPrimaryProductString} featuresRelatedProductString={JSON.stringify(combineRelatedFeatures)} />
        </>}
        handleClose={togglePopup}
      />}
      <button widgetname="Related/YourOutfit" id="star-button-compare" aria-label="comparison button" onClick={togglePopup} className="star">
        &#9733;
      </button>
      <a widgetname="Related/YourOutfit" href={'/ip/' + props.related_id} style={{textDecoration: 'none'}} onClick={onClickNavigate} >
        <div widgetname="Related/YourOutfit">
          <img widgetname="Related/YourOutfit" className='productImageInCard' src={props.related_thumbnail ? props.related_thumbnail : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609'} alt="..."/>
        </div>

        <div widgetname="Related/YourOutfit">
          <div widgetname="Related/YourOutfit" style={{ fontSize: 12 }} className='lineSpaceCard'>{props.related_category.toUpperCase()}</div>
          <div widgetname="Related/YourOutfit" className='boldFont lineSpaceCard'>{props.related_name}</div>
          <div widgetname="Related/YourOutfit" style={{ fontSize: 12 }} className='lineSpaceCard'>${props.related_price}</div>
          <div widgetname="Related/YourOutfit" className='lineSpaceCard'>
            <ProductRating rating={ratingRelatedCard} />
          </div>
        </div>
      </a>
    </div>
  )
});

export default RelatedCard;
