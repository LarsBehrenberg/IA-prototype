import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="col-md-4">
        <a className="btn btn-white-outline" href="#top">
          Dearest impressionist paintings
        </a>
      </div>
      <div className="col-md-4">
        <a className="btn btn-white-outline" href="#top">
          Impressionist Timeline
        </a>
      </div>
      <div className="col-md-4">
        <Link className="btn btn-white-outline" to="impressionism-quiz">
          Impressionist Quiz
        </Link>
      </div>
    </div>
    <div className="container" style={{ color: 'white', display: 'flex' }}>
      <div
        className="col-sm-12"
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <SocialIcon
          url="https://www.youtube.com/channel/UCp4kXBbQe5DvYY-v0vi3_zQ"
          className="social-icon"
          style={{ width: '30px', height: '30px' }}
        />
        <SocialIcon
          url="https://www.pinterest.co.uk/1u5g3vkf5xp33xzdg311ezzung5n21/"
          className="social-icon"
          style={{ width: '30px', height: '30px', marginLeft: '30px' }}
        />
        <SocialIcon
          url="https://www.instagram.com"
          className="social-icon"
          style={{ width: '30px', height: '30px', marginLeft: '30px' }}
        />
      </div>
    </div>
    <div className="container" style={{ textAlign: 'center' }}>
      <div className="col-sm-3" style={{ borderRight: '2px solid white' }}>
        <Link
          to="about-us"
          style={{
            lineHeight: '30px',
            textDecoration: 'underline',
            color: 'white',
          }}
        >
          About Us
        </Link>
      </div>
      <div className="col-sm-3" style={{ borderRight: '2px solid white' }}>
        <Link
          to="contact-us"
          style={{
            lineHeight: '30px',
            textDecoration: 'underline',
            color: 'white',
          }}
        >
          Contact Us
        </Link>
      </div>
      <div className="col-sm-3" style={{ borderRight: '2px solid white' }}>
        <Link
          to="about-us"
          style={{
            lineHeight: '30px',
            textDecoration: 'underline',
            color: 'white',
          }}
        >
          Legal
        </Link>
      </div>
      <div className="col-sm-3">
        <Link
          to="about-us"
          style={{
            lineHeight: '30px',
            textDecoration: 'underline',
            color: 'white',
          }}
        >
          Homepage
        </Link>
      </div>
    </div>
    <div className="container" style={{ textAlign: 'center' }}>
      <p style={{ lineHeight: '30px', color: '#ffffff50' }}>
        &copy; {new Date().getFullYear()} ImpressionistArts.com
      </p>
    </div>
  </footer>
);

export default Footer;
