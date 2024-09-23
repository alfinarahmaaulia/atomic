import React from 'react';
import './SkillCard.css';

const SkillCard = ({ icon, title, description }) => {
  return (
    <div className="Skills-card">
      <div className="Skills-card-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="Card-title-description">
        <h3 className="Card-title">{title}</h3>
        <p className="Card-description">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
