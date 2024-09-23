import React from 'react';
import HeaderTitleMolecule from '../molecules/HeaderTitleMolecule';
import ImageAtom from '../atoms/ImageAtom';
import './HeaderOrganism.css';

const HeaderOrganism = () => {
  return (
    <header className="Header-organism">
      <div className="Header-text">
        <HeaderTitleMolecule />
      </div>
      <div className="Header-image">
        <ImageAtom src="/HeaderImage.png" alt="Header Visual" />
      </div>
    </header>
  );
}

export default HeaderOrganism;
