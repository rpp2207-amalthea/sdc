import React, {useState, useEffect} from 'react';

const AddToOutfitCard = React.forwardRef((props, ref) => {


  var onClickYourOutfit = () => {
    props.onClickYourOutfit();
  }

  return (
    <div widgetname="Related/YourOutfit" className='productCard addToOutfitButton' ref={ref} data-testid='AddToOutfitTest'>
      <div widgetname="Related/YourOutfit" className='addToOutfitText'>
        Add To Outfit
      </div><br/>
      <button widgetname="Related/YourOutfit" className='button-add-to-outfit' onClick={onClickYourOutfit}>
        +
      </button>
    </div>
  )
});

export default AddToOutfitCard;
