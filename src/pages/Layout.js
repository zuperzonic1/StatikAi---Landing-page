import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">statik<span className='yellow-span'>Ai</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link as={Link} to="/products" className="nav-link-custom">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact-Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <footer className="custom-footer">
        <Container>
          <p className="text-muted">
            &copy;2024 statikAi. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default Layout;
