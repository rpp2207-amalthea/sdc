import React, { useState, useEffect } from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import axios from 'axios';
// import getAverageRating from '../../index.jsx';
import { getAverageRating } from '../../App.jsx';

const YourOutfitCard = React.forwardRef((props, ref) => {

  const [ratingYourOutfitCard, setRatingYourOutfitCard] = useState(0);

  useEffect(() => {
    axios.get('/getProductReviews', { params: { id: props.current_id } })
      .then(function (response) {
        var reviews = response.data.results;
        var average = getAverageRating(reviews);
        setRatingYourOutfitCard(average);
      })
      .catch(function (error) {
      })
  }, []);

  var onClickDeleteProduct = (event) => {
    event.stopPropagation();
    props.onClickDeleteProductYourOutfit(props.current_id);
  }

  var onClickNavigate = () => {
    props.onClickNavigateToNewProductPage(props.current_id);
  }

  return (
    <div widgetname="Related/YourOutfit" className='productCard' onClick={onClickNavigate} ref={ref} data-testid='testYourOutfitCard'>
      <a widgetname="Related/YourOutfit" href={props.current_id? '/ip/' + props.current_id : null} style={{textDecoration: 'none'}}>
        <img widgetname="Related/YourOutfit" className='productImageInCard' src={props.current_thumbnail ? props.current_thumbnail : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609'} alt="..."/>
        <div widgetname="Related/YourOutfit">
          <div widgetname="Related/YourOutfit" style={{ fontSize: 12 }} className='lineSpaceCard'>{props.current_category ? props.current_category.toUpperCase() : null}</div>
          <div widgetname="Related/YourOutfit" className='boldFont lineSpaceCard'>{props.current_name ? props.current_name : null}</div>
          <div widgetname="Related/YourOutfit" style={{ fontSize: 12 }} className='lineSpaceCard'>${props.current_price ? props.current_price : null}</div>
          <div widgetname="Related/YourOutfit" className='lineSpaceCard'>
            <ProductRating rating={ratingYourOutfitCard} />
          </div>
        </div>
      </a>
      <button onClick={onClickDeleteProduct} aria-label="remove outfit icon" className="close-icon-yourOutfit"><div className='x-icon'></div></button>
    </div>
  )
});

export default YourOutfitCard;
