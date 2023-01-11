import React, {useState, useEffect} from 'react';

const LeftScrollButtonCarousel = (props) => {

  var onClickScrollLeft = () => {
    props.moveLeft();
  }

  return (
    <div widgetname="Related/YourOutfit" className="leftScrollButtonPosition" data-testid='testLeftScrollButton'>
      <button widgetname="Related/YourOutfit" aria-label="left scroll button" className='leftScrollButton' onClick={onClickScrollLeft}>
        <div widgetname="Related/YourOutfit" className='left-icon'></div>
      </button>
    </div>
  )
}

export default LeftScrollButtonCarousel;