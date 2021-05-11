import React, { useState } from 'react'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import UsuarioBusqueda from '../ui/UsuarioBusqueda'
import UsuarioTable from '../ui/UsuarioTable'
import Main from '../layout/Main'
import UsuarioForm from '../ui/UsuarioForm'
import { Button, Col, Row } from 'react-bootstrap'

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])
    const [usuarioModificar, setUsuarioModificar] = useState(null)
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleClickBuscar = async (filtro) => {

        try{
            
            const resp = await clienteAxios.get('/api/usuarios/buscar',{
                params:{
                   filtro,
                }
            })
            setUsuarios(resp.data.usuarios)
         
        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        try {

            await clienteAxios.delete(`/api/usuarios/eliminar/${ codigo }`)
            const newUsuarios = usuarios.filter(usuario => usuario.codigo !== codigo)
            setUsuarios(newUsuarios)
            toast.dark('USUARIO ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    const handleClickCrear = () => {
        setUsuarioModificar(null)
        setMostrarFormulario(true)
    }

    const handleClickModificar = usuario => {
        setUsuarioModificar(usuario)
        setMostrarFormulario(true)
    }

    const handleClickVolver = () => {
        setMostrarFormulario(false)
    }

    

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Usuarios</h5>
            {mostrarFormulario 
            ?
                <UsuarioForm 
                    usuarioModificar={usuarioModificar}
                    handleClickVolver={handleClickVolver}
                />
            :
                <>
                <Row>
                    <Col>
                        <UsuarioBusqueda
                            handleClickBuscar={handleClickBuscar}
                        />
                    </Col>
                    <Col xs={"auto"}>
                        <Button
                            variant="dark"
                            onClick={handleClickCrear}
                        >
                            + Crear
                        </Button>
                    </Col>
                </Row>
                <hr/>
                {usuarios.length > 0 &&
                    <UsuarioTable 
                        usuarios={usuarios}
                        handleClickEliminar={handleClickEliminar}
                        handleClickModificar={handleClickModificar}
                    />
                }
                </>
            }
        </Main>
    )

}

export default Usuarios