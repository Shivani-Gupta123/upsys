import React from 'react';
import '../App.css';
import { Button } from './Button';
import './heroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Transforming Ideas Into Innovation :<br/> Your IT Partner for Success</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          EXPLORE MORE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;