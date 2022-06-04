import React from 'react'
import { Navbar, Link,Nav, NavDropdown,Brand,Container} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"

const NavBar = () => {
    let navigate = useNavigate();
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand onClick={() =>navigate("/",{replace:true})}>Quadratic Root Finder</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link onClick={() =>navigate("/result",{replace:true})}>Results</Nav.Link>
        <Nav.Link onClick={() =>navigate("/graph",{replace:true})}>Graphs</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar