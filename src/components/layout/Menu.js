import React from 'react';
import {  Nav, Navbar, NavDropdown} from 'react-bootstrap';

import { Link } from "react-router-dom";

const Menu = () => {

    return (  

        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Linea Ensamble</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
                    {/* <Nav.Link as={Link} to="/home">Inicio</Nav.Link> */}
                    <NavDropdown title="Administrar" id="nav-administrar">
                        <NavDropdown.Item as={Link} to="/estaciones">Estaciones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/items">Items</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/lectores">Lectores</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/usuarios">Usuarios</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>


    );
}
 
export default Menu;