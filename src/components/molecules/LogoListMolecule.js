import React from 'react';
import LogoAtom from '../atoms/LogoAtom';
import './LogoListMolecule.css';

const LogoListMolecule = ({ logos }) => {
  return (
    <div className="logo-list-molecule">
      {logos.map((logo, index) => (
        <LogoAtom key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
};

export default LogoListMolecule;
