import React from 'react';
import './cards.css';
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='assets/img1.webp'
              text='Web Application'
              path={URL}
            />
            <CardItem
              src='images/img-2.jpg'
              text='IOT'
              path={URL}
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Digital Marketing'
              path={URL}
            />
            <CardItem
              src='images/img-4.jpg'
              text='Mobile Application'
              path={URL}
            />
            <CardItem
              src='images/img-8.jpg'
              text='Content Creation'
              path={URL}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;