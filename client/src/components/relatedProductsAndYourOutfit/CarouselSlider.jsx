// Potential refactor

// import React, {useState, useEffect} from 'react';
// import LeftScrollButtonCarousel from './LeftScrollButtonCarousel.jsx';
// import RightScrollButtonCarousel from './RightScrollButtonCarousel.jsx';

// const CarouselSlider = (props) => {

//   var onClickDeleteProduct = () => {
//     props.onClickDeleteProductYourOutfit(props.current_id);
//   }

//   var onClickNavigate = () => {
//     props.onClickNavigateToNewProductPage(props.current_id);
//   }

//   return (
//     <div class="sidescroller"
//     onScroll={handleSideScroll}
//     //
//     ref={relatedCarourselRef}>
//     { scrollRelatedProgress > 0 ? (<LeftScrollButtonCarousel  moveLeft={moveLeft}/>) : null }

//     {relatedProductsData.map((itemObj, index) => {
//     return <RelatedCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} related_id={itemObj.related_id} related_name={itemObj.related_name}
//     related_category={itemObj.related_category} related_price={itemObj.related_price}
//     related_thumbnail={itemObj.related_thumbnail} {...itemObj.related_features} featuresPrimaryProductString={featuresPrimaryProduct} gatherRefsRelated={gatherRefsRelated}
//     // ref={activeSlideRef}
//     key={`slide-${index}`}

//     ref={index === activeSlide ? activeSlideRef : index-1===activeSlide ? nextSlideRef : index+1===activeSlide ? prevSlideRef : null}/>
//     })}

//     { scrollToggleRelatedProgress && scrollRelatedProgress<100 && <RightScrollButtonCarousel moveRight={moveRight}/>}

//   </div>
//   )
// }

// export default CarouselSlider;
