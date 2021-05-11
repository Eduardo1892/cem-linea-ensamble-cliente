import React, { useState } from 'react'
import LectorBusqueda from '../ui/LectorBusqueda'
import LectorTable from '../ui/LectorTable'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main'
import LectorForm from '../ui/LectorForm'
import { Button, Col, Row } from 'react-bootstrap'


const Lectores = () => {

    const [lectores, setLectores] = useState([])
    const [lectorModificar, setLectorModificar] = useState(null)
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleClickBuscar = async (codigo) => {

        try{
            
            const resp = await clienteAxios.get('/api/lectores/buscar',{
                params:{
                   codigo,
                }
            })
            setLectores(resp.data.lectores)

        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        try {

            await clienteAxios.delete(`/api/lectores/eliminar/${ codigo }`)
            const newLectores = lectores.filter(lector => lector.codigo !== codigo)
            setLectores(newLectores)
            toast.dark('LECTOR ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    const handleClickCrear = () => {
        setLectorModificar(null)
        setMostrarFormulario(true)

    }

    const handleClickModificar = lector => {
        setLectorModificar(lector)
        setMostrarFormulario(true)
    }

    const handleClickVolver = () => {
        setMostrarFormulario(false)
    }


    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Lectores</h5>
            {mostrarFormulario
            ?
                <LectorForm
                    lectorModificar={lectorModificar}
                    handleClickVolver={handleClickVolver}

                />

            :
                <>
                <Row>
                    <Col>
                        <LectorBusqueda
                            handleClickBuscar={handleClickBuscar}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button
                            variant="dark"
                            onClick={handleClickCrear}
                        >
                            + Crear
                        </Button>
                    </Col>
                </Row>
                <hr/>
                {lectores.length > 0 &&
            
                    <LectorTable 
                        lectores={lectores}
                        handleClickEliminar={handleClickEliminar}
                        handleClickModificar={handleClickModificar}
                    />
                    
                }
                </>
            }
            
        </Main>
    )

}

export default Lectores