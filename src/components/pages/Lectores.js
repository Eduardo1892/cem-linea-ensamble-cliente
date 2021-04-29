import React, { useState } from 'react'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import LectorBusqueda from '../ui/LectorBusqueda'
import LectorTable from '../ui/LectorTable'
import Main from '../layout/Main'


const Lectores = () => {

    const [lectores, setLectores] = useState([])

    const handleClickBuscar = async (codigo) => {

        try{
            
            const resp = await clienteAxios.get('/api/lectores/buscar',{
                params:{
                   codigo,
                }
            })
            setLectores(resp.data.lectores)

        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        try {

            await clienteAxios.delete(`/api/lectores/eliminar/${ codigo }`)
            const newLectores = lectores.filter(lector => lector.codigo !== codigo)
            setLectores(newLectores)
            toast.success('LECTOR ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Lectores</h5>
            <LectorBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            {lectores.length > 0 &&
        
                <LectorTable 
                    lectores={lectores}
                    handleClickEliminar={handleClickEliminar}
                />
                
            }
        </Main>
    )

}

export default Lectores