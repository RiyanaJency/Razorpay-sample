import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#2c3e50', padding: '10px 0' }}>
      <Container>
        <Navbar.Brand as={Link} to="/Home" className="fw-bold text-light">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
          style={{ color: '#ffffff' }} 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Home" className="text-light mx-3 fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Betting" className="text-light mx-3 fw-semibold">
              Betting Page
            </Nav.Link>
            <Nav.Link as={Link} to="/User profile" className="text-light mx-3 fw-semibold">
              User Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/Payment" className="text-light mx-3 fw-semibold">
              Payment Integration
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;



