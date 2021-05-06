import React  from 'react'
import { Card } from 'react-bootstrap'

const EstacionCard = ({estaciones }) => {    

    return (
        <>
            {estaciones.map(estacion => {
                const { codigo, descripcion } = estacion
                return(
                    <Card
                        bg={'primary'}
                        key={codigo}
                        text={ 'white' }
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Estacion</Card.Header>
                        <Card.Body>
                        <Card.Title>{descripcion}</Card.Title>
                        <Card.Text>
                            TEXTO
                        </Card.Text>
                        </Card.Body>
                    </Card>
                )

            })}
        </>
    )
}

export default EstacionCard