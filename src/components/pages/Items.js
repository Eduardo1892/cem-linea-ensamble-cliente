
import React, { useState } from 'react'
import ItemBusqueda from '../ui/ItemBusqueda';
import ItemTable from '../ui/ItemTable'; 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main';




const Items = () => {

    const [items, setItems] = useState([])

    const handleClickBuscar = async (filtro) => {

        //toast.warning('Agregue una imagen, video ó audio de la pregunta.', {containerId: 'sys_msg'})
        try{
            
            const resp = await clienteAxios.get('/api/items/buscar',{
                params:{
                   filtro,
                }
            })
            setItems(resp.data.items)
            console.log(resp.data)            

        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        console.log('codigoEliminar', codigo)

        try {

            await clienteAxios.delete(`/api/items/eliminar/${ codigo }`)
            const newItems = items.filter(item => item.codigo !== codigo)
            setItems(newItems)
            toast.success('ITEM ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Items</h5>
            <ItemBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            {items.length > 0 && 
                <ItemTable
                items={items}
                handleClickEliminar={handleClickEliminar}
            />
            }
            
        </Main>
    )

}

export default Items