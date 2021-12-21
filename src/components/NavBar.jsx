import React from "react";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import './NavBar.css'

let NavBar = () =>{
    return(
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">StreamHardware</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Incio</Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Placas de video</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Gabinetes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Memorias RAM</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Todo</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
        
    )
}
export default NavBar