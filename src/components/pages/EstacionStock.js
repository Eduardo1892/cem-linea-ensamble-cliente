import React, { useState } from 'react'
import EstacionStockTable from '../ui/EstacionStockTable'
import Main from '../layout/Main'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import EstacionStockForm from '../ui/EstacionStockForm'
import { Button, Col, Row } from 'react-bootstrap'
import EstacionStockBusqueda from '../ui/EstacionStockBusqueda'

const EstacionStock = () => {

    
    const [estacionStockModificar, setEstacionStockModificar] = useState(null)
    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [estacionesStock, setEstacionesStock] = useState([])

    const handleClickBuscar = async (codigoEstacion) => {

        try{

            const resp = await clienteAxios.get('/api/estacion-stock/listar',{
                params:{
                    codigoEstacion
                }
            })
            setEstacionesStock(resp.data.estacionesStock)
           console.log(resp.data.estacionesStock)
        }catch(e){
            handleError(e)
        }

    }

    const handleClickEliminar = async (codigoBarra) =>{

        try {

            await clienteAxios.delete(`/api/estacion-stock/eliminar/${ codigoBarra }`)
            const newEstacionesStock = estacionesStock.filter(estacionStock => estacionStock.codigo_barra !== codigoBarra)
            setEstacionesStock(newEstacionesStock)
            toast.dark('ESTACION STOCK ELIMINADA', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    const handleClickCrear = () => {
        setEstacionStockModificar(null)
        setMostrarFormulario(true)
    }

    const handleClickModificar = estacionStock => {
        setEstacionStockModificar(estacionStock)
        setMostrarFormulario(true)
    }

    const handleClickVolver = () => {
        setMostrarFormulario(false)
    }


    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Estaciones Stock</h5>
            {mostrarFormulario
            ?
                <EstacionStockForm
                    estacionStockModificar={estacionStockModificar}
                    handleClickVolver={handleClickVolver}
                />  
            :
                <>
                <Row>
                    <Col>
                    <EstacionStockBusqueda
                        handleClickBuscar={handleClickBuscar}
                    />
                    </Col>
                    <Col xs={"auto"} className="d-flex align-items-end mb-3">
                        <Button
                            variant="dark"
                            onClick={handleClickCrear}
                        >
                            + Crear
                        </Button>
                    </Col>
                </Row>

                <hr/>
                {estacionesStock.length > 0 &&
                <EstacionStockTable
                    estacionesStock={estacionesStock}
                    handleClickEliminar={handleClickEliminar}
                    handleClickModificar={handleClickModificar}
                />
                }
                </>
            
            }
            
            
        </Main>
    )

}

export default EstacionStock