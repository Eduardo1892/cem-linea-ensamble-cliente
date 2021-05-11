import React  from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const EstacionCard = ({estaciones }) => {    

    return (
        <Row>
            <Col className="mt-3 d-flex flex-row flex-wrap">
            {estaciones.map(estacion => {
                const { codigo, descripcion, paquetes } = estacion
                return(
                    <Card
                        bg={'dark'}
                        key={codigo}
                        text={ 'white' }
                        style={{ width: '18rem' }}
                        className="m-2"

                    >
                        <Card.Header>Estacion</Card.Header>
                        <Card.Body>
                        <Card.Title>{descripcion}</Card.Title>
                        <Card.Text>
                            {paquetes} Paquetes
                        </Card.Text>
                        </Card.Body>
                    </Card>
                )

            })}
            </Col>
        </Row>
    )
}

export default EstacionCard