import React, {useEffect, useState} from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddToCart from '../client/src/components/overview/addToCart.jsx';
import ImageGallery from '../client/src/components/overview/imageGallery.jsx';
import ProductInfo from '../client/src/components/overview/productInfo.jsx';
import StyleSelector from '../client/src/components/overview/styleSelector.jsx';
import Overview from '../client/src/components/overview/overview.jsx';
import Header from '../client/src/components/Header.jsx';
import CartForm from '../client/src/components/overview/CartForm.jsx';



var productInfo = {
  id: 71704,
  name: "YEasy 350"
};

var styles = [{style_id:444254,name:"Zebra Stripe",original_price:"900.00",sale_price:null,default:false,photos:[{thumbnail_url:"https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",url:"https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{thumbnail_url:"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",url: "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"}],skus:{2580773:{quantity:14,size:7},2580774:{quantity:25,size:7.5},2580775:{quantity:9,size:8}}}]


var rating = 4;

test('should render Overview', () => {
  render(<Overview info={productInfo} styleIndex={0} styles={styles} />);
      const testOverview = screen.getByTestId('testOverview');
      expect(testOverview).toBeInTheDocument()
})

test('should render AddToCart', () => {

  render(<AddToCart  styleIndex={0} styles={styles}/>);
      const testAddToCart = screen.getByTestId('testAddToCart');
      expect(testAddToCart).toBeInTheDocument()
})

test('should render ImageGallery', () => {
  render(<ImageGallery styleIndex={0} styles={styles}/>);
      const testImageGallery = screen.getByTestId('testImageGallery');
      expect(testImageGallery).toBeInTheDocument()
})

test('should render ProductInfo', () => {
  render(<ProductInfo rating={rating} info={productInfo}/>);
      const testProductInfo = screen.getByTestId('testProductInfo');
      expect(testProductInfo).toBeInTheDocument()
})

test('should render StyleSelector', () => {
  render(<StyleSelector styleIndex={0} styles={styles} />);
      const testStyleSelector = screen.getByTestId('testStyleSelector');
      expect(testStyleSelector).toBeInTheDocument()
})

test('should render Header', () => {
  render(<Header />);
  const cartForm = screen.getTestId('header');
  expect(cartForm).toBeInTheDocument();
})

test('should render Cart Form', () => {
  render(<CartForm />);
  const cartForm = screen.getTestId('cart-form');
  expect(cartForm).toBeInTheDocument();
})

test('should delete cart on click', () => {
  render(<CartForm cartnumber={1} />)
  userEvent.click(screen.getByText('Empty Shopping Cart'));
  expect(screen.getByText('Your Cart has 0 items.')).toBeInTheDocument();
})

// test('should render Your Outfit Product Card with props', () => {


//   var onClickNavigateToNewProductPage = () => {
//     return;
//   }
//   var onClickDeleteProductYourOutfit = () => {
//     return;
//   }

//   let itemObj= {
//     current_name: 'asdf',
//     current_id: 134,
//     current_category: 'shoes',
//     current_price: 100,
//     current_thumbnail: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
//   }

//   render(<YourOutfitCard  onClickNavigateToNewProductPage={onClickNavigateToNewProductPage} current_name={itemObj.current_name} current_id={itemObj.current_id}
//     current_category={itemObj.current_category} current_price={itemObj.current_price}
//     current_thumbnail={itemObj.current_thumbnail} onClickDeleteProductYourOutfit={onClickDeleteProductYourOutfit}
//     key={`slide-${itemObj.current_id}`}
//     ref={null}/>);

//     const testIdInYourOutfitCard = screen.getByTestId('testYourOutfitCard');

//     expect(testIdInYourOutfitCard).toBeInTheDocument()
// })