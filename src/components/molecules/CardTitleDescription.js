import React from 'react';
import './CardTitleDescription.css';

const CardTitleDescription = ({ title, description }) => {
  return (
    <div className="Card-title-description">
      <h3 className="Card-title">{title}</h3>
      <p className="Card-description">{description}</p>
    </div>
  );
};

export default CardTitleDescription;
