import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'

const UsuarioList = props => {

    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {
        
        const getUsuarios = async () => {

            const resp = await clienteAxios.get('/api/usuarios/listar')
            setUsuarios(resp.data.usuarios)

        }

        getUsuarios()

    }, [])
    
    return (
        <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control 
                as="select"
                {...props}
            >
                <option key={"0"} value={"0"}>{"SELECCIONE"}</option>
                {
                    usuarios.map(usuario => {
                        const { codigo, nombre } = usuario
                        return <option key={codigo} value={codigo}>{nombre}</option>
                    })
                }
            </Form.Control>
        </Form.Group>
      )
}
 
export default UsuarioList