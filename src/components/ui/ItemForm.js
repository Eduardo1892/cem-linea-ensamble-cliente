import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


const ItemForm = ({itemModificar, handleClickVolver}) => {


    const [formulario, setFormulario] = useState({
        codigo: '',
        descripcion: '',
    })   

    const { codigo, descripcion } = formulario

    useEffect(() => {
        if(itemModificar){
            setFormulario(itemModificar)
        }
    }, [itemModificar])


    const handleChangeInput = e => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })

    }


    const handleClickCrear = async () => {
        
        try{
            
            await clienteAxios.post('/api/items/crear',{
                codigo, 
                descripcion
            })

            setFormulario({
                codigo: '',
                descripcion: '',
            })

            toast.success('ITEM CREADO', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickActualizar = async () => {
        
        try{
            
            await clienteAxios.put('/api/items/modificar',{
                codigo, 
                descripcion
            })

            toast.success('ITEM ACTUALIZADO', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }


    return ( 

        <Form>
            <Form.Group controlId="codigo">
                <Form.Label>Código</Form.Label>
                <Form.Control 
                    type="text" 
                    name="codigo"
                    placeholder="Código" 
                    value={codigo}
                    readOnly={itemModificar}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control 
                    type="text" 
                    name="descripcion"
                    placeholder="Descripción" 
                    value={descripcion}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Row>
                <Col xs={"auto"}>
                    {itemModificar
                    ?
                        <Button 
                            variant="danger" 
                            onClick={handleClickActualizar}
                        >
                            Actualizar
                        </Button>
                    :
                        <Button 
                            variant="danger" 
                            onClick={handleClickCrear}
                        >
                            Crear
                        </Button>

                    }
                </Col>
                <Col xs={"auto"}>
                    <Button 
                        variant="outline-info" 
                        onClick={handleClickVolver}
                    >
                        Volver
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
 
export default ItemForm