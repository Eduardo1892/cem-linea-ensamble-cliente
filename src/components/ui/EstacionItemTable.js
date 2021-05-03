import React, { useState, useRef }  from 'react'
import { Table, Button, Form } from 'react-bootstrap'
const EstacionItemTable = ({ estacionItems, handleClickEliminar, handleClickCrear}) => {    

    const [cantidad, setCantidad] = useState(0)
    const inputCantidadRef = useRef(null)

    const handleChangeInput = e => {
        setCantidad( e.target.value)
    }

    
    const handleResetCantidad = () => {
        inputCantidadRef.current.value = 0
    }


    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Código</th>
                    <th className="text-center">Descripción</th>
                    <th className="text-center">Cantidad Requerida</th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                         estacionItems.map((estacionItem, index) => {
                           
                            const {codigo, descripcion, cant_requerida, selected } = estacionItem

                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{codigo}</td>  
                                <td>{descripcion}</td>
                                <td>{cant_requerida}</td>
                                <td className="text-center">
                                    <Form.Control 
                                        type="text" 
                                        name="cantidad"
                                        ref={inputCantidadRef}
                                        placeholder="Cantidad de items en la estacion" 
                                        onChange={handleChangeInput}
                                    />
                                </td>
                                <td className="text-center">
                                    {selected > 0 
                                    ?
                                        <Button 
                                            variant="danger"
                                            onClick={e => handleClickEliminar(codigo)}
                                        >
                                            Quitar
                                        </Button>
                                    :
                                        <Button 
                                            variant="success"
                                            onClick={e => handleClickCrear(codigo, cantidad, handleResetCantidad)}
                                        >
                                            Agregar
                                        </Button>
                                    
                                    }
                                    
                                </td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </Table>
        </>
    )
}

export default EstacionItemTable