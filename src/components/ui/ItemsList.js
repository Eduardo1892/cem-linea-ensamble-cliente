import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'

const ItemsList = props => {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        
        const getItems = async () => {

            const resp = await clienteAxios.get('/api/items/listar')
            setItems(resp.data.items)

        }

        getItems()

    }, [])
    
    return (
        <Form.Group>
            <Form.Label>Item</Form.Label>
            <Form.Control 
                as="select"
                {...props}
            >
                <option key={"0"} value={"0"}>{"SELECCIONE"}</option>
                {
                    items.map(item => {
                        const { codigo, descripcion } = item
                        return <option key={codigo} value={codigo}>{descripcion}</option>
                    })
                }
            </Form.Control>
        </Form.Group>
      )
}
 
export default ItemsList