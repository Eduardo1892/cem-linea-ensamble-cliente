import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


const EstacionForm = ({estacionModificar, handleClickVolver}) => {


    const [formulario, setFormulario] = useState({
        codigo: '',
        descripcion: '',
        es_inicio: false,
        es_termino: false,
        es_qa: false,
    })   

    const { codigo, descripcion, es_inicio, es_termino, es_qa } = formulario

    useEffect(() => {
        if(estacionModificar){
            setFormulario(estacionModificar)
        }
    }, [estacionModificar])


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
            
            await clienteAxios.post('/api/estaciones/crear',{
                codigo, 
                descripcion, 
                es_inicio, 
                es_termino, 
                es_qa
            })

            setFormulario({
                codigo: '',
                descripcion: '',
                es_inicio: false,
                es_termino: false,
                es_qa: false,
            })

            toast.dark('ESTACION CREADA', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickActualizar = async () => {
        
        try{
            
            await clienteAxios.put('/api/estaciones/modificar',{
                codigo, 
                descripcion, 
                es_inicio, 
                es_termino, 
                es_qa
            })

            toast.dark('ESTACION ACTUALIZADA', {containerId: 'sys_msg'})   

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
                    readOnly={estacionModificar}
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
            <Form.Group controlId="es_inicio">
                <Form.Check 
                    type="checkbox" 
                    name="es_inicio"
                    label="Estación de inicio" 
                    checked={es_inicio}
                    onChange={handleChangeCheckbox}
                />
            </Form.Group>
            <Form.Group controlId="es_qa">
                <Form.Check 
                    type="checkbox" 
                    name="es_qa"
                    label="Estación de control de calidad" 
                    checked={es_qa}
                    onChange={handleChangeCheckbox}
                />
            </Form.Group>
            <Form.Group controlId="es_termino">
                <Form.Check 
                    type="checkbox" 
                    name="es_termino"
                    label="Estación de término" 
                    checked={es_termino}
                    onChange={handleChangeCheckbox}
                />
            </Form.Group>
            <Row>
                <Col xs={"auto"}>
                    {estacionModificar
                    ?
                        <Button 
                            variant="dark" 
                            onClick={handleClickActualizar}
                        >
                            Actualizar
                        </Button>
                    :
                        <Button 
                            variant="dark" 
                            onClick={handleClickCrear}
                        >
                            Crear
                        </Button>

                    }
                </Col>
                <Col xs={"auto"}>
                    <Button 
                        variant="outline-dark" 
                        onClick={handleClickVolver}
                    >
                        Volver
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
 
export default EstacionForm
