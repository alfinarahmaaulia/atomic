import React from 'react';
import './ButtonAtom.css';

const ButtonAtom = ({ label, onClick }) => {
  return (
    <button className="Button-atom" onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonAtom;
