import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import NavbarBrand from './NavbarBrand';
import NavLinksGroup from '../molecules/NavLinksGroup';
import './Navbar.css'; // Import the navbar styles

const NavbarComponent = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <NavbarBrand />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinksGroup />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
