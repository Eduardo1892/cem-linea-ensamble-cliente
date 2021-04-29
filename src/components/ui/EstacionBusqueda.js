import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'



const EstacionBusqueda = ({handleClickBuscar}) => {

    const [filtro, setFiltroBusqueda] = useState('')


return(

    <Row>
        <Col>
            <Form.Control 
            id="descripcion"
            name="descripcion"
            type="text" 
            placeholder="Busqueda por código ó descripción de estación..."
            onChange={e => {
                setFiltroBusqueda(e.target.value.toUpperCase())
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

export default EstacionBusqueda

