import  React, { useState } from 'react'
import EstacionBusqueda from '../ui/EstacionBusqueda'
import EstacionTable from '../ui/EstacionTable' 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main'
import EstacionForm from '../ui/EstacionForm'
import { Button, Col, Row } from 'react-bootstrap'


function Estaciones() {

    const [estaciones, setEstaciones] = useState([])
    const [estacionModificar, setEstacionModificar] = useState(null)
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleClickBuscar = async (filtro) => {

         try{
            
            const resp = await clienteAxios.get('/api/estaciones/buscar',{
                params:{
                   filtro,
                }
            })
            setEstaciones(resp.data.estaciones)
          
        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        try {

            await clienteAxios.delete(`/api/estaciones/eliminar/${ codigo }`)
            const newEstaciones = estaciones.filter(estacion => estacion.codigo !== codigo)
            setEstaciones(newEstaciones)
            toast.success('ESTACION ELIMINADA', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    const handleClickModificar = estacion => {
        setEstacionModificar(estacion)
        setMostrarFormulario(true)
    }

    const handleClickVolver = () => {
        setMostrarFormulario(false)
    }

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Estaciones</h5>
            {mostrarFormulario 
            ?
                <EstacionForm
                    estacionModificar={estacionModificar}
                    handleClickVolver={handleClickVolver}
                />                
            :
                <>
                <Row>
                    <Col>
                        <EstacionBusqueda
                            handleClickBuscar={handleClickBuscar}
                        />
                    </Col>
                    <Col xs={"auto"}>
                        <Button
                            variant="info"
                            onClick={() => setMostrarFormulario(true)}
                        >
                            + Crear
                        </Button>
                    </Col>
                </Row>
                
               
                <hr/>
                {estaciones.length > 0 &&
                    <EstacionTable 
                        estaciones={estaciones}
                        handleClickEliminar={handleClickEliminar}
                        handleClickModificar={handleClickModificar}
                    />
                }
                </>
            }
        </Main>    
        
    )

}

export default Estaciones