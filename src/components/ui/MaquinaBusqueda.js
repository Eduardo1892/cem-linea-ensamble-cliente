import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import EstacionList from './EstacionList'



const MaquinaBusqueda = ({handleClickBuscar}) => {

    const [formularioBusqueda, setForumularioBusqueda] = useState({
        filtro: '',
        codigoEstacion: '0',
    })

    const { filtro, codigoEstacion } = formularioBusqueda

    const handleChangeInput = e => {

        setForumularioBusqueda({
            ...formularioBusqueda,
            [e.target.name]: e.target.value
        })

    }

    return(

        <>
        <Row>
            <Col>
                <Form.Group>
                    <EstacionList
                            id="codigoEstacion"
                            name="codigoEstacion"
                            as="select"
                            value={codigoEstacion}
                            onChange={handleChangeInput}
                    />
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col>
                <Form.Control 
                id="filtro"
                name="filtro"
                type="text" 
                placeholder="Busqueda por código ó descripción de máquina..."
                value={filtro}
                onChange={handleChangeInput}
                />
            </Col>
            <Col xs="auto">
                <Button 
                    variant="dark"
                    onClick={e => {
                        handleClickBuscar(formularioBusqueda)
                    }}
                >Buscar
                </Button>
            </Col>
        </Row>
        </>

    )

}

export default MaquinaBusqueda

