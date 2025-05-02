import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
        {/* Logo sous forme de texte */}
        <Navbar.Brand href="/" className="text-uppercase">
          <span className="navbar-logo">JOHN DOE</span>{" "}
        </Navbar.Brand>

        {/* Burger en haut à droite, carré */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="ms-auto p-2 border border-dark rounded"
          style={{ width: "40px", height: "40px" }}
        />

        {/* Menu de navigation */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-lg-auto flex-column flex-lg-row align-items-start align-items-lg-center">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "active" : ""}
            >
              Accueil
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/services"
              onClick={() => handleLinkClick("/services")}
              className={activeLink === "/services" ? "active" : ""}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/realisations"
              onClick={() => handleLinkClick("/realisations")}
              className={activeLink === "/realisations" ? "active" : ""}
            >
              Réalisations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              onClick={() => handleLinkClick("/blog")}
              className={activeLink === "/blog" ? "active" : ""}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={activeLink === "/contact" ? "active" : ""}
            >
              Me Contacter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
