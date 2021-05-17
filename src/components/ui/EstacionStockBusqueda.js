import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import EstacionList from './EstacionList'



const EstacionStockBusqueda = ({  handleClickBuscar }) => {


    const [codigoEstacion, setCodigoEstacion] = useState('0')

    const handleChangeInput = e => {
        setCodigoEstacion( e.target.value)
     }

    return(

        
        <Row>
            <Col>
                    <EstacionList
                        
                            id="codigoEstacion"
                            name="codigoEstacion"
                            as="select"
                            value={codigoEstacion}
                            onChange={handleChangeInput}
                    />
            </Col>
            <Col xs="auto" className="d-flex align-items-end mb-3">
                <Button 
                    variant="dark"
                    onClick={e => {
                        handleClickBuscar(codigoEstacion)
                    }}
                >Buscar
                </Button>
            </Col>
        </Row>

    )

}

export default EstacionStockBusqueda

