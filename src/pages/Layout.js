import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  useEffect(() => {
    // Attach the event listener
    const onPointerMove = (event) => {
      const blob = document.getElementById("blob");
      if (blob) {
        const { clientX, clientY } = event;
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      }
    };

    window.addEventListener("pointermove", onPointerMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
      <div className="d-flex flex-column min-vh-100">
        <Navbar collapseOnSelect expand="lg" className="custom-navbar">
          <Container>
            <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
              statik<span className="yellow-span">Ai</span>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="custom-toggler"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto text-end text-sm-start">
                <Nav.Link as={Link} to="/about" className="nav-link-custom">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/products" className="nav-link-custom">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                  Contact-Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Outlet will display the current route's component */}
        <Outlet />

        {/* Footer will be pushed to the bottom if there's not enough content */}
        <footer className="mt-auto custom-footer">
          <Container>
            <p className="text-end py-2">
              &copy;2024 statikAi - All rights reserved
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Layout;
