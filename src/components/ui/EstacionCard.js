import React  from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const EstacionCard = ({ estaciones }) => {    

    return (
        <Row>
            <Col className="mt-3 d-flex flex-row flex-wrap">
            {estaciones.map(estacion => {
                const { codigo, descripcion, paquetes, codigo_ultimo_item, codigo_ultima_estacion, 
                    ultima_fecha, ultima_hora, codigo_ultimo_usuario } = estacion
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
                             Paquetes: {paquetes}
                        </Card.Text>
                        {paquetes>0 &&  
                        <>                      
                            <Card.Text>
                            Último Item: {codigo_ultimo_item}
                            </Card.Text>
                            <Card.Text>
                            Estacion: {codigo_ultima_estacion}
                            </Card.Text>
                            <Card.Text>
                            Fecha: {ultima_fecha}
                            </Card.Text>
                            <Card.Text>
                            Hora: {ultima_hora}
                            </Card.Text>
                            <Card.Text>
                            Usuario: {codigo_ultimo_usuario}
                            </Card.Text>
                        </>
                        }
                        </Card.Body>
                    </Card>
                )

            })}
            </Col>
        </Row>
    )
}

export default EstacionCard