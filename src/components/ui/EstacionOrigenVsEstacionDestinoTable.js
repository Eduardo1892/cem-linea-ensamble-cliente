import { Table, Button } from 'react-bootstrap'

const EstacionOrigenVsEstacionDestinoTable = ({ codigoEstacion ,estacionOrigenVsEstacionDestinos, handleClickEliminar, handleClickCrear}) => {    



    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Código</th>
                    <th className="text-center">Descripción</th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    { 
                         estacionOrigenVsEstacionDestinos.map((estacionOrigenVsEstacionDestino, index) => {
                           
                            const {codigo, descripcion, selected } = estacionOrigenVsEstacionDestino

                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{codigo}</td>  
                                <td>{descripcion}</td>
                                <td className="text-center">
                                    {selected > 0 
                                    ?
                                        <Button 
                                            variant="danger"
                                            onClick={e => handleClickEliminar(codigoEstacion ,codigo)}
                                        >
                                            Quitar
                                        </Button>
                                    :
                                        <Button 
                                            variant="success"
                                            onClick={e => handleClickCrear(codigoEstacion, codigo)}
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

export default EstacionOrigenVsEstacionDestinoTable