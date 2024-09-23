import React from 'react';
import './SkillsSection.css';
import SkillCard from '../atoms/SkillCard';
import CardTitleDescription from '../molecules/CardTitleDescription';

const SkillsSection = () => {
  const skills = [
    { icon: 'path-to-icon-1.png', title: 'Skill 1', description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.' },
    { icon: 'path-to-icon-2.png', title: 'Skill 2', description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.' },
    { icon: 'path-to-icon-3.png', title: 'Skill 3', description: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.' },
  ];

  return (
    <section className="Skills-section">
      <div className="Cards-section">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            icon={skill.icon} 
            title={skill.title} 
            description={skill.description} 
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
