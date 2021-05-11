import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import AuthContext from '../../context/auth/AuthContext'
import Main from '../layout/Main'


const Login = () => {

    const history = useHistory()
    const {autenticado, iniciarSesion} = useContext(AuthContext)
    
    const [formulario, setFormulario] = useState({
        codigo: '',
        password: '',
    })

    const {codigo, password} = formulario

    useEffect(() => {
        if(autenticado && localStorage.getItem('token')){
            history.push('/home')
        }
    }, [autenticado])

    const handleChangeInput = e => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })

    }

    const handleClickIngresar = () => {
        iniciarSesion(codigo, password)
    }

    return (  

        <Main>
            <Container className="mt-5" fluid>
                <Row className="justify-content-sm-center">
                    <Col xl="3" lg="4" md="5" sm="10">
                        <h4 
                            className="mb-4 text-center text-secondary"
                        >
                            Iniciar Sesión 
                        </h4>
                        <Form> 
                            <Form.Group controlId="code">
                                {/* <Form.Label>Código</Form.Label> */}
                                <Form.Control 
                                    type="text"
                                    name="codigo"
                                    placeholder="Código Usuario"
                                    className="text-center"
                                    onChange={handleChangeInput}
                                    value={codigo}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            <Form.Group controlId="password">
                                {/* <Form.Label>Clave</Form.Label> */}
                                <Form.Control 
                                    type="password"  
                                    name="password"
                                    placeholder="Contraseña"
                                    className="text-center"
                                    onChange={handleChangeInput}
                                    value={password}
                                    autoComplete="off"
                                />
                            </Form.Group>
                            
                        </Form>
                        <Button 
                            variant="dark" 
                            type="submit"
                            block
                            onClick ={handleClickIngresar}
                        >
                            Ingresar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Main>


    )
}
 
export default Login