import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to='/'> <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}El Rincón Gourmet</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink end to="/" className='nav-link'>Inico</NavLink>
          <NavLink end to="/administrador" className='nav-link'>Administrador</NavLink>
          <NavLink end to="/registro" className='nav-link'>Registro</NavLink>
          <NavLink end to="/login" className='nav-link'>Login</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Menu;
