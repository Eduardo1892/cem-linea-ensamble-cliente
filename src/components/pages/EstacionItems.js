import React, { useState, useEffect } from 'react'
import EstacionList from '../ui/EstacionList'
import EstacionItemTable from '../ui/EstacionItemTable'
import Main from '../layout/Main'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


const EstacionItems = () => {

    
    const [codigoEstacion, setCodigoEstacion] = useState('0')
    const [estacionItems, setEstacionItems] = useState([])
  

    useEffect(() => {
        
        const getItemsEstacion = async (req, res) => {

            try{

                const resp = await clienteAxios.get('/api/estaciones-items/listar-items-estacion',{
                    params:{
                        codigoEstacion
                    }
                })
                setEstacionItems(resp.data.items)
                console.log(resp.data.items)
               
            }catch(e){
                handleError(e)
            }

        }
        getItemsEstacion()

    }, [codigoEstacion])
   
    const handleClickCrear = async (codigoItem, cantidad) => {
        
        try{
            
            await clienteAxios.post('/api/estaciones-items/crear',{
                codigoEstacion,
                codigoItem,
                cantidad
            })
            
            const newEstacionItems = estacionItems.map(estacionItem => {
                if(estacionItem.codigo === codigoItem){
                    return {
                        ...estacionItem,
                        selected: 1,
                        cant_requerida: cantidad,
                    }
                }else{
                    return estacionItem
                }
            })
            
            setEstacionItems(newEstacionItems)

            toast.dark('ITEMS AGREGADO A LA ESTACIÓN', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickEliminar = async (codigoItem) =>{

        try {

            await clienteAxios.delete(`/api/estaciones-items/eliminar/${ codigoEstacion }/${codigoItem}`)
            toast.dark('ITEM QUITADO', {containerId: 'sys_msg'})

            const newEstacionItems = estacionItems.map(estacionItem => {
                if(estacionItem.codigo === codigoItem){
                    return {
                        ...estacionItem,
                        selected: 0,
                        cant_requerida: 0,
                    }
                }else{
                    return estacionItem
                }
            })

            setEstacionItems(newEstacionItems)
   
         } catch (e) {
            handleError(e)
         }

    }


    const handleChangeInput = e => {
       setCodigoEstacion( e.target.value)
    }


    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Estaciones Items</h5>
            <EstacionList
                    id="codigoEstacion"
                    name="codigoEstacion"
                    value={codigoEstacion}
                    onChange={handleChangeInput}
                    
                />
            <hr/>
            {codigoEstacion !== '0' &&
                <EstacionItemTable
                    codigoEstacion={codigoEstacion}
                    estacionItems={estacionItems}
                    handleClickCrear={handleClickCrear}
                    handleClickEliminar={handleClickEliminar}
                />
            }
            
        </Main>
    )

}

export default EstacionItems