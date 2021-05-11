import React, { useState }  from 'react'
import { Button, Col, Form, Row, Table } from 'react-bootstrap'
const EstacionItemTable = ({ estacionItems, handleClickEliminar, handleClickCrear}) => {    

    const [cantidad, setCantidad] = useState(0)

    const handleChangeInput = (e) => {
        setCantidad(e.target.value)
    }

    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Código</th>
                    <th className="text-center">Descripción</th>
                    <th className="text-center">Cantidad</th>
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
                                <td className="text-center">
                                    {selected === 0 
                                    ?
                                        <Row>
                                            <Col>
                                                <Form.Control 
                                                    type="text" 
                                                    name="cantidadRequerida"
                                                    placeholder="Cantidad" 
                                                    onChange={handleChangeInput}
                                                />
                                            </Col>
                                        </Row>
                                        
                                    : 
                                        cant_requerida
                                    }
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
                                            variant="dark"
                                            onClick={e => handleClickCrear(codigo, cantidad)}
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