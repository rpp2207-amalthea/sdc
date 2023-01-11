import React, { useState, useEffect, useContext } from 'react';
import ProductRating from '../reviews/ProductRating.jsx';
import "../../styles/index.css";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductInfo = (props) => {
  // console.log('general info', props.info);
  const [favorited, setFavorited] = useState(false);
  const [heartClicked, setHeartClicked] = useState(false);

  // console.log(props.info)
  const onClickYourOutfit = () => {
    // console.log('clicked')
    props.onClickYourOutfit();
    setFavorited(true);
    setHeartClicked(true);
    toast(`${props.info.name} has been added to your outfits!`)

  }
  const onMouseUpHandler = () => {
    setFavorited(false);
  }

  return (
    <div  widgetname="Overview" data-testid='testProductInfo' className="productInfo">
      <div  widgetname="Overview" style={{ display: "flex" }}><ProductRating rating={props.rating} /><a className="hyperlink" href="#reviews" style={{ marginBottom: "1.25em", marginLeft: "1em"}}>Read all reviews</a></div>
      <p style={{ textTransform: 'uppercase'}}>{props.info.category}</p>
      <div  widgetname="Overview" style={{ display: 'flex', alignItems: 'top' }}>
        <h1  widgetname="Overview">{props.info.name}</h1>
        <div  widgetname="Overview" style={{ marginTop: "1em" }} onClick={onClickYourOutfit} id="hearted"  onAnimationEnd={() => setHeartClicked(false)}>{heartClicked ? <AiFillHeart className="heartClicked" color="red" size="26" /> : <AiFillHeart color="gainsboro" size="26" />}</div>
        <ToastContainer position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>

      </div>
    </div>
  )
}


export default ProductInfo;
