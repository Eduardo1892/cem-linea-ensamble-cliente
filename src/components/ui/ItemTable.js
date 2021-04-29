import React  from 'react'
import { Table, Button } from 'react-bootstrap'

const ItemTable = ({items, handleClickEliminar}) => {    


    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Código</th>
                    <th className="text-center">Descripción</th>
                    <th className="text-center">Modificar</th>
                    <th className="text-center">Eliminar</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {

                            const {codigo, descripcion } = item

                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{codigo}</td>  
                                <td>{descripcion}</td>
                                <td className="text-center">
                                    <Button 
                                        variant="outline-info"
                                    >
                                     Modificar
                                    </Button>
                                </td>
                                <td className="text-center">
                                    <Button 
                                        variant="outline-info"
                                        onClick={e => {
                                            handleClickEliminar(codigo)
                                        }}
                                    >
                                     Eliminar
                                    </Button>
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

export default ItemTable