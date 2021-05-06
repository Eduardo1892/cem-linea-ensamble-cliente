import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'



const CodigoBarraBusqueda = ({handleClickBuscar}) => {

    const [codigoBarra, setCodigoBarra] = useState('')


return(

    <Row>
        <Col>
            <Form.Control 
            id="codigoBarra"
            name="codigoBarra"
            type="text" 
            placeholder="Busqueda por código de barras..."
            onChange={e => {
                setCodigoBarra(e.target.value)
             }}
            />
        </Col>
        <Col xs="auto">
            <Button 
                variant="danger"
                onClick={e => {
                    handleClickBuscar(codigoBarra)
                }}
            >Buscar
            </Button>
        </Col>
    </Row>
    

)

}

export default CodigoBarraBusqueda

