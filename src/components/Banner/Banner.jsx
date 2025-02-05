import React from 'react';
import './Banner.css';

function Banner({ image, text, alt }) {
  return (
    <div className="banner">
      <img src={image} alt={alt} className="banner-image" />
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

export default Banner;
