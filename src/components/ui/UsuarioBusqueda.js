import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'



const UsuarioBusqueda = ({handleClickBuscar}) => {

    const [filtro, setFiltroBusqueda] = useState('')

    return(

        <Row>
            <Col>
                <Form.Control 
                id="filtro"
                name="filtro"
                type="text" 
                placeholder="Busqueda por código ó nombre de usuario..."
                onChange={e => {
                    setFiltroBusqueda(e.target.value)
                }}
                />
            </Col>
            <Col>
                <Button 
                    variant="danger"
                    onClick={e => {
                        handleClickBuscar(filtro)
                    }}
                >Buscar
                </Button>
            </Col>
        </Row>

    )

}

export default UsuarioBusqueda

