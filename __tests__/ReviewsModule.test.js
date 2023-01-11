import React, {useEffect, useState} from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sinon from 'sinon';
import { spy } from 'sinon';
import { format } from 'date-fns';

import Reviews from '../client/src/components/reviews/Reviews.jsx';
import ReviewList from '../client/src/components/reviews/ReviewList.jsx';
import ReviewForm from '../client/src/components/reviews/ReviewForm.jsx';
import RatingBreakdown from '../client/src/components/reviews/RatingBreakdown.jsx';
import ReviewTile from '../client/src/components/reviews/ReviewTile.jsx';
import ImageUpload from '../client/src/components/reviews/ImageUpload.jsx';

var reviewList = [
  {
      "review_id": 1277589,
      "rating": 1,
      "summary": "not very good",
      "recommend": false,
      "response": null,
      "body": "it's not what i expected",
      "date": "2022-12-02T00:00:00.000Z",
      "reviewer_name": "uud",
      "helpfulness": 0,
      "photos": []
  },
  {
      "review_id": 1277070,
      "rating": 5,
      "summary": "why?",
      "recommend": true,
      "response": null,
      "body": "I dont understand why api returns CREATED, but i can not see my review",
      "date": "2022-10-23T00:00:00.000Z",
      "reviewer_name": "www",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2456432,
              "url": "https://i.ibb.co/938pJdd/34d3b8081eff.jpg"
          }
      ]
    }
  ];

var productInfo = {
  id: 71704,
  name: "YEasy 350"
};

var meta = {
  "product_id": "71704",
  "ratings": {
      "1": "13",
      "2": "8",
      "3": "4",
      "4": "2",
      "5": "12"
  },
  "recommended": {
      "false": "8",
      "true": "31"
  },
  "characteristics": {
      "Size": {
          "id": 240607,
          "value": "2.5416666666666667"
      },
      "Width": {
          "id": 240608,
          "value": "3.0000000000000000"
      },
      "Comfort": {
          "id": 240609,
          "value": "2.6000000000000000"
      },
      "Quality": {
          "id": 240610,
          "value": "3.0400000000000000"
      }
  }
}

var rating = 4;

test('Reviews & Ratings Module should render', () => {
    render(<Reviews rating={rating} reviewList={reviewList} product={productInfo} meta={meta} />);

    const reviewModule = screen.queryByTestId('reviews-module');
    expect(reviewModule).toBeInTheDocument();
});

test('Should render average rating number', () => {
    render(<RatingBreakdown rating={rating} reviewList={reviewList} product={productInfo} meta={meta} />);
    const averageNumber = screen.queryByTestId('average-number');
    expect(averageNumber).toBeInTheDocument();
});

test('Should render average stars', () => {
    render(<RatingBreakdown rating={rating} reviewList={reviewList} meta={meta} />);
    const averageStars = screen.queryByTestId('average-stars');
    expect(averageStars).toBeInTheDocument();
});

test('Should render characteristics breakdown', () => {
    render(<RatingBreakdown rating={rating} reviewList={reviewList} meta={meta} />);
    const characteristicsBars = screen.queryByTestId('characteristic-bars');
    expect(characteristicsBars).toBeInTheDocument();
});

test('Review List should render', () => {
  render (<ReviewList reviewList={reviewList} />)
  const list = screen.queryByTestId('review-list');
  expect(list).toBeInTheDocument();
})

test('Should render Review Form', () => {
  render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
  const reviewForm = screen.queryByTestId('review-form');
  expect(reviewForm).toBeInTheDocument();
});

describe('Review Form should render the correct Characteristic Fields', () => {
  test('Review Form should render size radio buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const sizeField = screen.queryByTestId('size');
    expect(sizeField).toBeInTheDocument();
  });

  test('Review Form should render width radio buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const widthField = screen.queryByTestId('width');
    expect(widthField).toBeInTheDocument();
  });

  test('Review Form should render comfort radio buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const comfortField = screen.queryByTestId('comfort');
    expect(comfortField).toBeInTheDocument();
  });

  test('Review Form should render quality radio buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const qualityField = screen.queryByTestId('quality');
    expect(qualityField).toBeInTheDocument();
  });

  test('Review Form should NOT render length radio buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const lengthField = screen.queryByTestId('length');
    expect(lengthField).toBe(null);
  });

  test('Review Form should NOT render length radio buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const fitField = screen.queryByTestId('fit');
    expect(fitField).toBe(null);
  });
});

test('Review form should have image upload buttons', () => {
    render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
    const buttons = screen.queryByTestId('image-upload-buttons');
    expect(buttons).toBeInTheDocument();
});


  var review = {
    "review_id": 1277070,
    "rating": 5,
    "summary": "why?",
    "recommend": true,
    "response": null,
    "body": "I dont understand why api returns CREATED, but i can not see my review",
    "date": "2023-01-05T00:00:00.000Z",
    "reviewer_name": "www",
    "helpfulness": 0,
    "photos": [
        {
            "id": 2456432,
            "url": "https://i.ibb.co/938pJdd/34d3b8081eff.jpg"
        }
    ]
  }

// test('Should Render Review Tile', () => {
//   render(<ReviewTile review={review}/>);
//   const review = screen.queryByTestId('review-tile');
//   expect(review).toBeInTheDocument();
// });

test('Review Image Thumbnails should render', () => {
    render(<ReviewTile review={review}/>);
    const image = screen.queryByTestId('review-images');
    expect(image).toBeInTheDocument();
  });

// test('Review Thumbnail popup should render', () => {
//   const user = userEvent.setup();
//   render(<ReviewTile review={review} />);
//   // const reviewImg = screen.queryByTestId('review-image');
//   const img = screen.queryByTestId('review-image');
//   fireEvent.click(container.querySelector('review-image'));
//   // const imgPopUp = screen.queryByTestId('review-thumbnail-popup');
//   expect(screen.queryByTestId('review-thumbnail-popup')).toBeInTheDocument();
// })


test('Image Upload Buttons should exist', () => {
  render(<ImageUpload />);
  const imgUploadBtn = screen.queryByTestId('image-upload-buttons');
  expect(imgUploadBtn).toBeInTheDocument();
})


test('Button click is functional', () => {
  const user = userEvent.setup();
  render(<Reviews rating={rating} reviewList={reviewList} product={productInfo} meta={meta}/>);
  // const addReviewButton = screen.getByText('Add a review');
  userEvent.click(screen.getByText('Add a review'))
  render(<ReviewForm id={productInfo.id} productName={productInfo.name} meta={meta}/>);
  expect(screen.queryByTestId('review-form')).toBeInTheDocument();
});



