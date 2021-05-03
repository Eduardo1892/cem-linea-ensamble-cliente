import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


const LectorForm = ({lectorModificar, handleClickVolver}) => {


    const [formulario, setFormulario] = useState({
        codigo: '',
        inactibo: false,
    })   

    const { codigo, inactivo } = formulario

    useEffect(() => {
        if(lectorModificar){
            setFormulario(lectorModificar)
        }
    }, [lectorModificar])


    const handleChangeInput = e => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeCheckbox = e => {
     
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.checked
        })
    }


    const handleClickCrear = async () => {
        
        try{
            
            await clienteAxios.post('/api/lectores/crear',{
                codigo,
                inactivo
            })

            setFormulario({
                codigo: '',
                inactivo: false,
            })

            toast.success('LECTOR CREADO', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickActualizar = async () => {
        
        try{
            
            await clienteAxios.put('/api/lectores/modificar',{
                codigo,
                inactivo
            })

            toast.success('LECTOR ACTUALIZADO', {containerId: 'sys_msg'})   

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
                    readOnly={lectorModificar}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="inactivo">
                <Form.Check 
                    type="checkbox" 
                    name="inactivo"
                    label="Inactivo" 
                    checked={inactivo}
                    onChange={handleChangeCheckbox}
                />
            </Form.Group>
            <Row>
                <Col xs={"auto"}>
                    {lectorModificar
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

     );
}
 
export default LectorForm;