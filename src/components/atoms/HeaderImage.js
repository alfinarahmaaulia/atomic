import React from 'react';
import './HeaderImage.css';

const HeaderImage = () => {
  return (
    <div className="Header-image">
     <img src={`${process.env.PUBLIC_URL}/HeaderImage.png`} alt="Header Visual" />
    </div>
  );
};

export default HeaderImage;
