import React from 'react';
import './TextAtom.css';

const TextAtom = ({ children, className }) => {
  return <p className={className}>{children}</p>;
}

export default TextAtom;
