import { Container } from 'react-bootstrap';
import { useState } from 'react'
import EstacionBusqueda from '../ui/EstacionBusqueda';
import EstacionTable from '../ui/EstacionTable'; 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


function Estaciones() {

    const [estaciones, setEstaciones] = useState([])

    const handleClickBuscar = async (filtro) => {

        //toast.warning('Agregue una imagen, video ó audio de la pregunta.', {containerId: 'sys_msg'})
        try{
            
            const resp = await clienteAxios.get('/api/estaciones/listar',{
                params:{
                   filtro,
                }
            })
            setEstaciones(resp.data.estaciones)
            console.log(resp.data)            

        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        console.log('codigoEliminar', codigo)

        try {

            await clienteAxios.delete(`/api/estaciones/eliminar/${ codigo }`)
            const newEstaciones = estaciones.filter(estacion => estacion.codigo !== codigo)
            setEstaciones(newEstaciones)
            toast.success('ESTACION ELIMINADA', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    return(
        <Container>
            <EstacionBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            <EstacionTable 
                estaciones={estaciones}
                handleClickEliminar={handleClickEliminar}
            />
        </Container>
    )

}

export default Estaciones