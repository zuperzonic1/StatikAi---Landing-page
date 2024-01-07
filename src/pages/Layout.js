import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";

const Layout = ({}) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">statikAi</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* This 'Nav' component is intentionally left empty to keep the brand on the left */}
            <Nav className="me-auto"></Nav>
            {/* This 'Nav' component with 'ms-auto' will align its children to the right */}
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact-Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <footer className="footer">
        <Container>
          <p className="text-muted">
            &copy; 2021 statikAi. All rights reserved.
          </p>
        </Container>
      </footer>
    
    </>
  );
};

export default Layout;
