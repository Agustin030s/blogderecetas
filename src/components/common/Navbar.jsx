import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/Inicio">El Rincón Gourmet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/Recetas">Recetas</Nav.Link>
            <Nav.Link href="#/Administrador">Ingresa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Navbar;

