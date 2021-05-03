import  React, { useState } from 'react'
import EstacionBusqueda from '../ui/EstacionBusqueda';
import EstacionTable from '../ui/EstacionTable'; 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main';




function Estaciones() {

    const [estaciones, setEstaciones] = useState([])
    
    const handleClickBuscar = async (filtro) => {

        //toast.warning('Agregue una imagen, video ó audio de la pregunta.', {containerId: 'sys_msg'})
        try{
            
            const resp = await clienteAxios.get('/api/estaciones/buscar',{
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
        <Main>
            <h5 className="mt-5 mb-3">Administrar Estaciones</h5>
            <EstacionBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            {estaciones.length > 0 &&
                <EstacionTable 
                estaciones={estaciones}
                handleClickEliminar={handleClickEliminar}
            />
            }
        </Main>    
        
    )

}

export default Estaciones