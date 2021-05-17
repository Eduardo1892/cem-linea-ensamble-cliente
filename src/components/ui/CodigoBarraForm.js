import { Row, Col, Button, Form } from 'react-bootstrap'
import ItemsList from './ItemsList'



const CodigoBarraForm = ({formulario, setFormulario,handleClickCrear}) => {

    

    const { codigoBarra, codigoItem } = formulario

    const handleChangeInput = e => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })

    }

    return(

        <>
        <Row>
            <Col>
                <Form.Group>
                    <ItemsList
                            id="codigoItem"
                            name="codigoItem"
                            as="select"
                            value={codigoItem}
                            onChange={handleChangeInput}
                    />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Control 
                id="codigoBarra"
                name="codigoBarra"
                type="text" 
                placeholder="Código barras"
                value={codigoBarra}
                onChange={handleChangeInput}
                />
            </Col>
            <Col xs="auto">
                <Button 
                    variant="dark"
                    onClick={e => {
                        handleClickCrear(codigoBarra, codigoItem)
                    }}
                >Crear
                </Button>
            </Col>
        </Row>
        </>

    )

}

export default CodigoBarraForm

