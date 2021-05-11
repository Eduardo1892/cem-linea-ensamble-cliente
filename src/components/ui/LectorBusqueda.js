import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'


const LectorBusqueda = ({handleClickBuscar}) => {

    const [codigo, setCodigo] = useState('')

    return(

        <Row>
            <Col>
                <Form.Control 
                id="codigo"
                name="codigo"
                type="text" 
                placeholder="Busqueda por código de lector..."
                onChange={e => {
                    setCodigo(e.target.value)
                }}
                />
            </Col>
            <Col xs="auto">
                <Button 
                    variant="dark"
                    onClick={e => {
                        handleClickBuscar(codigo)
                    }}
                >Buscar
                </Button>
            </Col>
        </Row>

    )

}

export default LectorBusqueda

