import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure Journey to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p>For any query<br/><span>Get In Touch With Us</span> </p>
            <Link to='/sign-up'>Contact</Link>
            <Link to ='/'>Email</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Technology</h2>
            <Link to='/'>ReactJS</Link>
            <Link to='/'>NodeJS</Link>
            <Link to='/'>Wordpress</Link>
            <Link to='/'>Salesforce</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <SocialIcon url="https://www.linkedin.com/company/upsys-it-and-marketing-solutions/" />
            <SocialIcon url="https://api.whatsapp.com/send/?phone=%2B918871091864&text&type=phone_number&app_absent=0" />
            <SocialIcon url="https://www.instagram.com/upsys.in/" />
            <SocialIcon url="https://www.email.com/upsys.in" />
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={logo} style={{height:'40px', width:'40px'}} alt='img'/>
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>UPSYS © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;