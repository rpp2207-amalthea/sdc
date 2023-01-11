import React, {useEffect, useState} from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import sinon from 'sinon';
import Questions from '../client/src/components/Q&A/Questions.jsx';
import Answers from '../client/src/components/Q&A/Answer.jsx';

var questionData = {
  "product_id": "71697",
  "results": [
      {
          "question_id": 642705,
          "question_body": "test test test?",
          "question_date": "2022-08-26T00:00:00.000Z",
          "asker_name": "not_ricky",
          "question_helpfulness": 12,
          "reported": false,
          "answers": {
              "5989327": {
                  "id": 5989327,
                  "body": "How are U doing mate",
                  "date": "2022-10-29T00:00:00.000Z",
                  "answerer_name": "theBomb.com",
                  "helpfulness": 4,
                  "photos": [
                      "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667073383/jmibjnrbgthkephusi6t.png",
                      "https://res.cloudinary.com/dskwqzkmr/image/upload/v1667073383/kh1hhlqxdbftxsn4t4ee.jpg"
                  ]
              },
              "5989374": {
                  "id": 5989374,
                  "body": "asdf",
                  "date": "2022-11-02T00:00:00.000Z",
                  "answerer_name": "asdf",
                  "helpfulness": 0,
                  "photos": []
              },
              "5989375": {
                  "id": 5989375,
                  "body": "dsf",
                  "date": "2022-11-02T00:00:00.000Z",
                  "answerer_name": "dsf",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      }
  ]
}
var questionResults = questionData.results;

describe('Questions & Answers Testing', () => {
  test('should render the Q&A component', () => {
    render(<Questions data={questionResults}/>)
    const questionsModule = screen.getByTestId('question-module');
    expect(questionsModule).toBeInTheDocument();
  })
});
