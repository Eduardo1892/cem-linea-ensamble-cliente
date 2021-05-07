import React, { useState } from 'react'
import MaquinaBusqueda from '../ui/MaquinaBusqueda'
import MaquinaTable from '../ui/MaquinaTable' 
import MaquinaForm from '../ui/MaquinaForm'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main'
import { Button, Col, Row } from 'react-bootstrap'


const Maquinas = () => {

    const [maquinas, setMaquinas] = useState([])
    const [maquinaModificar, setMaquinaModificar] = useState(null)
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleClickBuscar = async (formularioBusqueda) => {

        try{
            
            const { filtro, codigoEstacion } = formularioBusqueda

            const resp = await clienteAxios.get('/api/maquinas/buscar',{
                params:{
                   filtro,
                   codigoEstacion
                }
            })
            setMaquinas(resp.data.maquinas)
        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{


        try {

            await clienteAxios.delete(`/api/maquinas/eliminar/${ codigo }`)
            const newMaquinas = maquinas.filter(maquina => maquina.codigo !== codigo)
            setMaquinas(newMaquinas)
            toast.success('MÁQUINA ELIMINADA', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    const handleClickModificar = maquina => {
        setMaquinaModificar(maquina)
        setMostrarFormulario(true)
    }

    const handleClickVolver = () => {
        setMostrarFormulario(false)
    }

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Maquinas</h5>
            {mostrarFormulario
            ?
                <MaquinaForm
                    maquinaModificar={maquinaModificar}
                    handleClickVolver={handleClickVolver}
                />  
            :
                <>
                <Row>
                    <Col>
                    <MaquinaBusqueda
                        handleClickBuscar={handleClickBuscar}
                    />
                    </Col>
                    <Col xs={"auto"} className="d-flex align-items-end">
                        <Button
                            variant="info"
                            onClick={e => setMostrarFormulario(true)}
                        >
                            + Crear
                        </Button>
                    </Col>
                </Row>
                
                <hr/>
                {maquinas.length > 0 && 
                    <MaquinaTable
                        maquinas={maquinas}
                        handleClickEliminar={handleClickEliminar}
                        handleClickModificar={handleClickModificar}
                    />
                }
                </>
            
            }
        </Main>
    )

}

export default Maquinas