import React from "react";
import { Container,Nav,Navbar,NavDropdown } from "react-bootstrap";
import Cartwidget from "./CartWidget";
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><Link to='/'>StreamHardware</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link><Link to='/'>Incio</Link></Nav.Link>
      <Nav.Link><Link to='/nosotros'>Nosotros</Link></Nav.Link>
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to='/categoria/mouse'>Mouse</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/gabinetes'>Gabinetes</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/teclados'>Teclados</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item ><Link to='/todo'>Todo</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Link to='/cart'><Cartwidget/></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
        
    )
}
export default NavBar