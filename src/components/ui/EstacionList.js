import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import clienteAxios from '../../config/clienteAxios';

const EstacionList = () => {

    const [estaciones, setEstaciones] = useState([])
    
    useEffect(() => {
        
        const getEstaciones = async () => {

            const resp = await clienteAxios.get('/api/estaciones/listar')
            setEstaciones(resp.data.estaciones)

        }

        getEstaciones()

    }, [])
    
    return (
        <Form.Group controlId="EstacionList">
            <Form.Label>Estaciones</Form.Label>
            <Form.Control as="select">
                
                {
                    estaciones.map(estacion => {
                        const { codigo, descripcion } = estacion
                        return <option key={codigo} value={codigo}>{descripcion}</option>
                    })
                }
            </Form.Control>
        </Form.Group>
      )
}
 
export default EstacionList;