import React, { useContext } from 'react'
import {  Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { Link } from "react-router-dom"
import AuthContext from '../../context/auth/AuthContext'

const Menu = () => {

    const { autenticado, cerrarSesion } = useContext(AuthContext)

    return (  
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Linea Ensamble</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
            {autenticado 
            &&
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
                    {/* <Nav.Link as={Link} to="/home">Inicio</Nav.Link> */}
                    <NavDropdown title="Administrar" id="nav-administrar">
                        <NavDropdown.Item as={Link} to="/consulta">Consulta</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/estaciones">Estaciones</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/estaciones-items">Estaciones Items</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/estaciones-origen-estaciones-destino">Estaciones Origen vs Destino</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/items">Items</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/lectores">Lectores</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/maquinas">Maquinas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/usuarios">Usuarios</NavDropdown.Item>
                        {/* <NavDropdown.Divider />*/}
                    </NavDropdown>
                </Nav>
                <Button 
                    variant="danger"
                    onClick={() => cerrarSesion()}
                >Salir
                </Button>
            </Navbar.Collapse>
            }
        </Navbar>
    )
}
 
export default Menu