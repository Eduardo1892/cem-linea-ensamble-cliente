import React  from 'react'
import { Table, Button } from 'react-bootstrap'

const LectorTable = ({lectores, handleClickEliminar, handleClickModificar}) => {    

    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Código</th>
                    <th className="text-center">Modificar</th>
                    <th className="text-center">Eliminar</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lectores.map((lector, index) => {

                            const {codigo } = lector

                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{codigo}</td>  
                                <td className="text-center">
                                    <Button 
                                        variant="outline-info"
                                        onClick={e => handleClickModificar(lector)}
                                    >
                                     Modificar
                                    </Button>
                                </td>
                                <td className="text-center">
                                    <Button 
                                        variant="outline-danger"
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

export default LectorTable