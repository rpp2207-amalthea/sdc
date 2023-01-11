import React, { useEffect, useState } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import sinon from 'sinon';
import { spy } from 'sinon';
// import App from '../client/src/App.jsx';
import YourOutfitCard from '../client/src/components/relatedProductsAndYourOutfit/YourOutfitCard.jsx';
import ComparisonTable from '../client/src/components/relatedProductsAndYourOutfit/ComparisonTable.jsx';
import RelatedCard from '../client/src/components/relatedProductsAndYourOutfit/RelatedCard.jsx';
import AddToOutfitCard from '../client/src/components/relatedProductsAndYourOutfit/AddToOutfitCard.jsx';
import LeftScrollButtonCarousel from '../client/src/components/relatedProductsAndYourOutfit/LeftScrollButtonCarousel.jsx';
import RightScrollButtonCarousel from '../client/src/components/relatedProductsAndYourOutfit/RightScrollButtonCarousel.jsx';
// import Spinner from '../client/src/img/spiffygif_46x46.gif';

test('should render Left ScrollButtonCarousel', () => {

  render(<LeftScrollButtonCarousel />);
  const testIdInYourOutfitCard = screen.getByTestId('testLeftScrollButton');
  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Right ScrollButtonCarousel', () => {
  render(<RightScrollButtonCarousel />);
  const testIdInYourOutfitCard = screen.getByTestId('testRightScrollButton');
  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Your Outfit Product Card with props', () => {


  var onClickNavigateToNewProductPage = () => {
    return;
  }
  var onClickDeleteProductYourOutfit = () => {
    return;
  }

  let itemObj = {
    current_name: 'Bright Future Sunglasses',
    current_id: 71698,
    current_category: 'Accessories',
    current_price: "69.00",
    current_thumbnail: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  }

  render(<YourOutfitCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} current_name={itemObj.current_name} current_id={itemObj.current_id}
    current_category={itemObj.current_category} current_price={itemObj.current_price}
    current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}
    key={`slide-${itemObj.current_id}`}
    ref={null} />);

  const testIdInYourOutfitCard = screen.getByTestId('testYourOutfitCard');

  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Related Product Card with props', () => {


  var onClickNavigateToNewProductPage = () => {
    return;
  }

  let itemObj = {
    related_name: 'Bright Future Sunglasses',
    related_id: 71698,
    related_category: 'Accessories',
    related_price: "69.00",
    related_thumbnail: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
    related_features: [{ feature: "Lenses", value: "Ultrasheen" }, { feature: "UV Protection", value: null }, { feature: "Frames", value: "LightCompose" }]
  }

  let featuresPrimaryProduct = "[{\"featurePrimary\":\"Sole\",\"valuePrimary\":\"Rubber\",\"namePrimary\":\"YEasy 350\"},{\"featurePrimary\":\"Material\",\"valuePrimary\":\"FullControlSkin\",\"namePrimary\":\"YEasy 350\"},{\"featurePrimary\":\"Stitching\",\"valuePrimary\":\"Double Stitch\",\"namePrimary\":\"YEasy 350\"}]"

  render(<RelatedCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} related_id={itemObj.related_id} related_name={itemObj.related_name}
    related_category={itemObj.related_category} related_price={itemObj.related_price}
    related_thumbnail={itemObj.related_thumbnail} {...itemObj.related_features} featuresPrimaryProductString={featuresPrimaryProduct}
    key={`slide-${itemObj.related_id}`}
    ref={null} />);

  const testIdInYourOutfitCard = screen.getByTestId('testRelatedCard');

  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Related Product Card with props', () => {


  var onClickNavigateToNewProductPage = () => {
    return;
  }
  var onClickDeleteProductYourOutfit = () => {
    return;
  }

  let itemObj = {
    current_name: 'Bright Future Sunglasses',
    current_id: 71698,
    current_category: 'Accessories',
    current_price: "69.00",
    current_thumbnail: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
  }

  render(<YourOutfitCard onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} current_name={itemObj.current_name} current_id={itemObj.current_id}
    current_category={itemObj.current_category} current_price={itemObj.current_price}
    current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}
    key={`slide-${itemObj.current_id}`}
    ref={null} />);

  const testIdInYourOutfitCard = screen.getByTestId('testYourOutfitCard');

  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Add To Your Outfit Product Card', () => {

  var onClickYourOutfit = () => {
    return;
  }

  render(<AddToOutfitCard onClickYourOutfit={onClickYourOutfit} ref={null} />);

  const testIdInYourOutfitCard = screen.getByTestId('AddToOutfitTest');

  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

test('should render Comparison Table', () => {

  let itemObj = {
    related_name: 'Bright Future Sunglasses',
  }

  let featuresPrimaryProduct = "[{\"featurePrimary\":\"Sole\",\"valuePrimary\":\"Rubber\",\"namePrimary\":\"YEasy 350\"},{\"featurePrimary\":\"Material\",\"valuePrimary\":\"FullControlSkin\",\"namePrimary\":\"YEasy 350\"},{\"featurePrimary\":\"Stitching\",\"valuePrimary\":\"Double Stitch\",\"namePrimary\":\"YEasy 350\"}]"

  render(<ComparisonTable related_name={itemObj.related_name} featuresPrimaryProductString={featuresPrimaryProduct}
    featuresRelatedProductString={JSON.stringify('[{ feature: "Lenses", value: "Ultrasheen" }, { feature: "UV Protection", value: null }, { feature: "Frames", value: "LightCompose" }]')}/>);

  const testIdInYourOutfitCard = screen.getByTestId('CompareTableTest');

  expect(testIdInYourOutfitCard).toBeInTheDocument()
})

// test('should render Main App component', () => {
//   render(<App/>);
//       const testIdInYourOutfitCard = screen.getByTestId('testYourOutfitCard');
//       expect(testIdInYourOutfitCard).toBeInTheDocument()
// })


