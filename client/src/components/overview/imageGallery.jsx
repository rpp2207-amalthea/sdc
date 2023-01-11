import React, { useState, useEffect, Suspense } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpecificImage from './SpecificImage.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineExpand } from 'react-icons/ai';
const Spinner = require('../../img/spiffygif_46x46.gif');



import "../../styles/index.css";



const ImageGallery = (props) => {

  const [primaryImageIndex, setPrimaryImageIndex] = useState(props.primaryImageIndex);
  const [arrowIndex, setArrowIndex] = useState(0);


  // console.log(props.styles[props.styleIndex]?.photos);

  const arrowClicked = (int) => {
    setPrimaryImageIndex(primaryImageIndex + int)
    if ((props.styles[props.styleIndex]?.photos.length - (arrowIndex + int)) >= 5 && (arrowIndex + int) >= 0)
      setArrowIndex(arrowIndex + int);
    // console.log('arrowInd', arrowIndex, 'length', props.styles[props.styleIndex]?.photos.length, 'plus', int, "diff", props.styles[props.styleIndex]?.photos.length - arrowIndex);
  }

  // if (props.photos && props.chosenStyle) {
  return (
    <div widgetname="Overview" data-testid='testImageGallery' >
      <div widgetname="Overview" id="main-img">

          <img widgetname="Overview" id="primary-img" className="maxDimensions" src={props.styles[props.styleIndex]?.photos[primaryImageIndex].url}
            onClick={() => { props.setExpandedView(true); props.setPrimaryImageIndex(primaryImageIndex); }} />
        < AiOutlineExpand onClick={() => { props.setPrimaryImageIndex(primaryImageIndex); props.setExpandedView(true); }} size="1.5em" color="white" className="expanded" />

        <div className='photoList'>
          {primaryImageIndex === 0
            ? <div></div>
            : <BsChevronUp size="1.5em" color="gray" className="up-Arrow" onClick={() => arrowClicked(-1)} />
          }
          {props.styles[props.styleIndex]?.photos.map((photo, index) => {
            return (
              index >= arrowIndex && index - arrowIndex <= 4 ? (
                <img key={index} onClick={() => setPrimaryImageIndex(index)} className={index === primaryImageIndex ? "onePhoto selectedImage" : "onePhoto"} src={photo.thumbnail_url} alt="..." />
              ) : null
            )
          })}
          {primaryImageIndex === props.styles[props.styleIndex]?.photos.length - 1
            ? <div></div>
            :
            <BsChevronDown
              size="1.5em" color="gray" className="down-Arrow" onClick={() => arrowClicked(1)} />
          }
        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default ImageGallery;