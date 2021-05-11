import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


const UsuarioForm = ({usuarioModificar, handleClickVolver}) => {


    const [formulario, setFormulario] = useState({
        codigo: '',
        nombre: '',
        password: '',
        passwordConfirm: '',
        inactivo: false,
    })   

    const { codigo, nombre, password, passwordConfirm, inactivo } = formulario

    useEffect(() => {
        if(usuarioModificar){
            setFormulario({
                codigo: usuarioModificar.codigo,
                nombre: usuarioModificar.nombre,
                password: usuarioModificar.password,
                passwordConfirm: usuarioModificar.password,
                inactivo: usuarioModificar.inactivo,
            })
        }
    }, [usuarioModificar])


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

            if(password !== passwordConfirm){
                toast.dark('La contraseña y su confirmación no coinciden', {containerId: 'sys_msg'})
                return
            }

            await clienteAxios.post('/api/usuarios/crear',{
                codigo, 
                nombre, 
                password, 
                inactivo, 
            })

            setFormulario({
                codigo: '',
                nombre: '',
                password: '',
                inactivo: false,
            })

            toast.dark('ESTACION CREADA', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }
      
    }

    const handleClickActualizar = async () => {
       
        try{
            
            await clienteAxios.put('/api/usuarios/modificar',{
                codigo, 
                nombre, 
                password, 
                inactivo, 
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
                    readOnly={usuarioModificar}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre" 
                    value={nombre}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Contraseña" 
                    value={password}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="passwordConfirm">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control 
                    type="password" 
                    name="passwordConfirm"
                    placeholder="Confirmar contraseña" 
                    value={passwordConfirm}
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
                    {usuarioModificar
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
 
export default UsuarioForm
