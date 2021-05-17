import React  from 'react'
import { Button, Table } from 'react-bootstrap'



const EstacionStockTable = ({ estacionesStock, handleClickEliminar, handleClickModificar}) => {    

    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Código Barra</th>
                    <th className="text-center">Item</th>
                    <th className="text-center">Estación</th>
                    <th className="text-center">Cantidad Total</th>
                    <th className="text-center">Cantidad Utilizada</th>
                    <th className="text-center">Cantidad Disponible</th>
                    <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                         estacionesStock.map((estacionStock, index) => {
                            
                            const {codigo_barra, codigo_item, codigo_estacion, cantidad_total, cantidad_utilizada, cantidad_disponible } = estacionStock
                            
                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{codigo_barra}</td>  
                                <td>{codigo_item}</td>
                                <td>{codigo_estacion}</td>
                                <td>{cantidad_total}</td>
                                <td>{cantidad_utilizada}</td>
                                <td>{cantidad_disponible}</td>
                                <td className="text-center">
                                <td className="text-center">
                                    <Button 
                                        variant="dark"
                                        onClick={e => handleClickModificar(estacionStock)}
                                    >
                                     Modificar
                                    </Button>
                                </td>
                                <td className="text-center">
                                    <Button 
                                        variant="outline-dark"
                                        onClick={e => handleClickEliminar(codigo_barra)}
                                    >
                                     Eliminar
                                    </Button>
                                </td>
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

export default EstacionStockTable