import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import EstacionList from './EstacionList'


const MaquinaForm = ({maquinaModificar, handleClickVolver}) => {


    const [formulario, setFormulario] = useState({
        codigo: '',
        descripcion: '',
        codigoEstacion: '0',
    })   

    const { codigo, descripcion, codigoEstacion } = formulario

    useEffect(() => {
        if(maquinaModificar){
            setFormulario({
                codigo: maquinaModificar.codigo,
                descripcion: maquinaModificar.descripcion,
                codigoEstacion: maquinaModificar.codigo_estacion,
            })
        }
    }, [maquinaModificar])


    const handleChangeInput = e => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }


    const handleClickCrear = async () => {

        
        try{
            
            await clienteAxios.post('/api/maquinas/crear',{
                codigo,
                descripcion,
                codigoEstacion
            })

            setFormulario({
                codigo: '',
                descripcion: '',
                codigoEstacion: '0'
            })

            toast.dark('MAQUINA CREADA', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickActualizar = async () => {
        
        try{
            
            await clienteAxios.put('/api/maquinas/modificar',{
                codigo,
                descripcion,
                codigoEstacion
            })

            toast.dark('MAQUINA ACTUALIZADA', {containerId: 'sys_msg'})   

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
                    readOnly={maquinaModificar}
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
            <Form.Group>
                <EstacionList
                        id="codigoEstacion"
                        name="codigoEstacion"
                        value={codigoEstacion}
                        onChange={handleChangeInput}
                />
            </Form.Group>
            <Row>
                <Col xs={"auto"}>
                    {maquinaModificar
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
 
export default MaquinaForm