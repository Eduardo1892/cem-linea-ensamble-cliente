import React  from 'react'
import { Table, Button } from 'react-bootstrap'

const CodigoBarraTable = ({ codigoBarras, handleClickEliminar }) => {    

    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Código Barra</th>
                        <th className="text-center">Código Item</th>
                        <th className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        codigoBarras.map((codigoBarra, index) => {

                            const {codigo_barra, codigo_item } = codigoBarra

                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{codigo_barra}</td>  
                                <td>{codigo_item}</td>
                                <td className="text-center">
                                    <Button 
                                        variant="outline-dark"
                                        onClick={e => handleClickEliminar(codigo_barra)}
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

export default CodigoBarraTable