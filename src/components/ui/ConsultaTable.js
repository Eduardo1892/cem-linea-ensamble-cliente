import React  from 'react'
import { Table } from 'react-bootstrap'

const ConsultaTable = ({paquetes}) => {    

    return (
        <>
            <Table striped bordered hover variant="light" responsive> 
                <thead>
                    <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Estación</th>
                    <th className="text-center">Paquete</th>
                    <th className="text-center">Item</th>
                    <th className="text-center">Codigo Barras</th>
                    <th className="text-center">Máquina</th>
                    <th className="text-center">Usuario</th>
                    <th className="text-center">Fecha</th>
                    <th className="text-center">Hora</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paquetes.map((paquete, index) => {

                            const {codigo, estacion, item,
                                   codigo_barra, maquina, usuario,
                                   fecha_sys, hora_sys } = paquete
                            /* Si el atributo existe o no..
                            let descripcionItem = ''
                            if(paquete.hasOwnProperty("item")){
                                descripcionItem = item.descripcion
                            }*/

                            let descripcionItem = item !== null ? item.descripcion : ''

                            //const { descripcion: descripcionItem } = item
                            const { descripcion: descripcionEstacion} = estacion
                            const { descripcion: descripcionMaquina} = maquina
                            const { nombre } = usuario

                            return(
                                <tr key={index}>
                                <td>{index +1}</td>
                                <td>{descripcionEstacion}</td>
                                <td>{codigo}</td>  
                                <td>{descripcionItem}</td>
                                <td>{codigo_barra}</td>
                                <td>{descripcionMaquina}</td>
                                <td>{nombre}</td>
                                <td>{fecha_sys}</td>
                                <td>{hora_sys}</td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ConsultaTable