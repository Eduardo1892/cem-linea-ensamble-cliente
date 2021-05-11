import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'



const ItemBusqueda = ({handleClickBuscar}) => {

    const [filtro, setFiltroBusqueda] = useState('')


    return(

        <Row>
            <Col>
                <Form.Control 
                id="filtro"
                name="filtro"
                type="text" 
                placeholder="Busqueda por código ó descripción de item..."
                onChange={e => {
                    setFiltroBusqueda(e.target.value)
                }}
                />
            </Col>
            <Col xs="auto">
                <Button 
                    variant="dark"
                    onClick={e => {
                        handleClickBuscar(filtro)
                    }}
                >Buscar
                </Button>
            </Col>
        </Row>
        

    )

}

export default ItemBusqueda

