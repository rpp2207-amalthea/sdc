import React, {useState, useEffect} from 'react';

const RightScrollButtonCarousel = (props) => {

  var onClickScrollRight = () => {
    props.moveRight();
  }

  return (
    <div widgetname="Related/YourOutfit" className='rightScrollButtonPosition' data-testid='testRightScrollButton'>
      <button widgetname="Related/YourOutfit"  aria-label="right scroll button" className='rightScrollButton' onClick={onClickScrollRight}>
        <div widgetname="Related/YourOutfit" className='right-icon'></div>
      </button>
    </div>
  )
}

export default RightScrollButtonCarousel;