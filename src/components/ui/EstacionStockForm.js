import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import EstacionList from './EstacionList'
import UsuarioList from './UsuarioList'


const EstacionStockForm = ({estacionStockModificar, handleClickVolver}) => {


    const [formulario, setFormulario] = useState({
        codigoBarra: '',
        codigoItem: '',
        codigoEstacion: '0',
        cantidadTotal: '0',
        cantidadUtilizada: '0',
        cantidadDisponible: '0',
        codigoUsuario: '0',
    })   

    const { codigoBarra, codigoItem, codigoEstacion, cantidadTotal, cantidadUtilizada, cantidadDisponible, codigoUsuario } = formulario

    useEffect(() => {
        if(estacionStockModificar){
            setFormulario({
                codigoBarra: estacionStockModificar.codigo_barra,
                codigoItem: estacionStockModificar.codigo_item,
                codigoEstacion: estacionStockModificar.codigo_estacion,
                cantidadTotal: estacionStockModificar.cantidad_total,
                cantidadUtilizada: estacionStockModificar.cantidad_utilizada,
                cantidadDisponible: estacionStockModificar.cantidad_disponible,
                codigoUsuario: estacionStockModificar.codigo_usuario,
            })
        }
    }, [estacionStockModificar])


    const handleChangeInput = e => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }


    const handleClickCrear = async () => {

        
        try{
            
            await clienteAxios.post('/api/estacion-stock/crear',{
                codigoBarra,
                codigoItem,
                codigoEstacion,
                cantidadTotal,
                cantidadUtilizada,
                cantidadDisponible,
                codigoUsuario,
            })

            setFormulario({
                codigoBarra: '',
                codigoItem: '',
                codigoEstacion: '0',
                cantidadTotal: '0',
                cantidadUtilizada: '0',
                cantidadDisponible: '0',
                codigoUsuario: '0',
            })

            toast.dark('ESTACION STOCK CREADA', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickActualizar = async () => {
        
        try{
            
            await clienteAxios.put('/api/estacion-stock/modificar',{
                codigoBarra,
                codigoItem,
                codigoEstacion,
                cantidadTotal,
                cantidadUtilizada,
                cantidadDisponible,
                codigoUsuario,
            })

            toast.dark('ESTACION STOCK ACTUALIZADA', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }


    return ( 

        <Form>
            <Form.Group controlId="codigoBarra">
                <Form.Label>Código Barra</Form.Label>
                <Form.Control 
                    type="text" 
                    name="codigoBarra"
                    placeholder="CÓDIGO BARRAS" 
                    value={codigoBarra}
                    readOnly={estacionStockModificar}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="codigoItem">
                <Form.Label>Código Item</Form.Label>
                <Form.Control 
                    type="text" 
                    name="codigoItem"
                    placeholder="CODIGO ITEM" 
                    value={codigoItem}
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
            <Form.Group>
                <UsuarioList
                        id="codigoUsuario"
                        name="codigoUsuario"
                        value={codigoUsuario}
                        onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="cantidadTotal">
                <Form.Label>Cantidad total</Form.Label>
                <Form.Control 
                    type="text" 
                    name="cantidadTotal"
                    placeholder="cantidadTotal" 
                    value={cantidadTotal}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="cantidadUtilizada">
                <Form.Label>Cantidad utilizada</Form.Label>
                <Form.Control 
                    type="text" 
                    name="cantidadUtilizada"
                    placeholder="cantidadUtilizada" 
                    value={cantidadUtilizada}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Form.Group controlId="cantidadDisponible">
                <Form.Label>Cantidad Disponible</Form.Label>
                <Form.Control 
                    type="text" 
                    name="cantidadDisponible"
                    placeholder="cantidadDisponible" 
                    value={cantidadDisponible}
                    onChange={handleChangeInput}
                />
            </Form.Group>
            <Row>
                <Col xs={"auto"}>
                    {estacionStockModificar
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
 
export default EstacionStockForm