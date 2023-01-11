import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import SpecificImage from './SpecificImage.jsx';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { FaLess } from 'react-icons/fa';
import { AiOutlineShrink } from 'react-icons/ai';
import "../../styles/index.css";



const ImageGallery = (props) => {

    const [primaryImageIndex, setPrimaryImageIndex] = useState(props.primaryImageIndex);
    const [arrowIndex, setArrowIndex] = useState(0);


    // console.log(props.styles[props.styleIndex]?.photos);

    const arrowClicked = (int) => {
        setPrimaryImageIndex(primaryImageIndex + int)
        if ((props.styles[props.styleIndex]?.photos.length - (arrowIndex + int)) >= 5 && (arrowIndex + int) >= 0)
        setArrowIndex(arrowIndex + int);
    }

    // if (props.photos && props.chosenStyle) {
    return (
        <div widgetname="Overview" data-testid='testImageGallery'>
            <div widgetname="Overview" id="main-img-expanded">
                <img widgetname="Overview" id="primary-img-expanded" className="maxDimensionsExpanded" src={props.styles[props.styleIndex]?.photos[primaryImageIndex].url}
                    onClick={() => { props.setExpandedView(false); props.setPrimaryImageIndex(primaryImageIndex); }} alt="..."/>
                < AiOutlineShrink   onClick={() => { props.setExpandedView(false);}} size="1.5em" color="white" className="expanded" />
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
        </div>
    )
}

export default ImageGallery;