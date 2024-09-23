import React from 'react';
import { Nav } from 'react-bootstrap';
import NavLink from '../atoms/NavLink';

const NavLinksGroup = () => {
  return (
    <Nav className="ms-auto navbar-nav">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#work">Work</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  );
};

export default NavLinksGroup;
