import React from 'react';
import TextAtom from '../atoms/TextAtom';
import ButtonAtom from '../atoms/ButtonAtom';
import './HeaderTitleMolecule.css';

const HeaderTitleMolecule = () => {
  return (
    <div className="Header-title-molecule">
      <TextAtom className="Branding">Branding | Image making</TextAtom>
      <TextAtom className="Visual-Designer">Visual Designer</TextAtom>
      <TextAtom className="Description">This is a template Figma file, turned into code using Anima.</TextAtom>
      <ButtonAtom label="Contact" />
    </div>
  );
}

export default HeaderTitleMolecule;
