import * as React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";

const NavBar = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NDP HOMES LTD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <Button>Home</Button>
            </NavLink>
            <NavLink to="/property">
              <Button>Property</Button>
            </NavLink>
            {user?.email && (
              <NavLink to="/dashboard">
                <Button>Dashboard</Button>
              </NavLink>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            {user?.email ? (
              <NavLink to="/login">
                <Button onClick={logout}>Logout</Button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            )}
            <button>{user.displayName}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
