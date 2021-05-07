import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'

const EstacionList = props => {

    const [estaciones, setEstaciones] = useState([])
    
    useEffect(() => {
        
        const getEstaciones = async () => {

            const resp = await clienteAxios.get('/api/estaciones/listar')
            setEstaciones(resp.data.estaciones)

        }

        getEstaciones()

    }, [])
    
    return (
        <Form.Group>
            <Form.Label>Estacion</Form.Label>
            <Form.Control 
                as="select"
                {...props}
            >
                <option key={"0"} value={"0"}>{"SELECCIONE"}</option>
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
 
export default EstacionList