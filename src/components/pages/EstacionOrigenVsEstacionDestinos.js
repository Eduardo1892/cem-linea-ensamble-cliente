import React, { useState, useEffect } from 'react'
import EstacionList from '../ui/EstacionList'
import EstacionOrigenVsEstacionDestinoTable from '../ui/EstacionOrigenVsEstacionDestinoTable'
import Main from '../layout/Main'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'


const EstacionOrigenVsEstacionDestinos = () => {

    
    const [codigoEstacion, setCodigoEstacion] = useState('0')
    const [estacionOrigenVsEstacionDestinos, setestacionOrigenVsEstacionDestino] = useState([])
  

    useEffect(() => {
        
        const getItemsEstacionOrigenVsEstacionDestino = async (req, res) => {

            try{

                const resp = await clienteAxios.get('/api/estaciones-origen-vs-estaciones-destino/listar',{
                    params:{
                        codigoEstacion
                    }
                })

                console.log(resp.data.estaciones)
                setestacionOrigenVsEstacionDestino(resp.data.estaciones)
        
               
            }catch(e){
                handleError(e)
            }

        }
        getItemsEstacionOrigenVsEstacionDestino()

    }, [codigoEstacion])
   
    const handleClickCrear = async (codigoEstacionOrigen, codigoEstacionDestino) => {
        
        try{
            
            await clienteAxios.post('/api/estaciones-origen-vs-estaciones-destino/crear',{
                codigoEstacionOrigen,
                codigoEstacionDestino,
            })
            
            const newEstacionOrigenVsEstacionDestino = estacionOrigenVsEstacionDestinos.map(estacionOrigenVsEstacionDestino => {
                if(estacionOrigenVsEstacionDestino.codigo === codigoEstacionDestino){
                    return {
                        ...estacionOrigenVsEstacionDestino,
                        selected: 1,
                    }
                }else{
                    return estacionOrigenVsEstacionDestino
                }
            })
            
            setestacionOrigenVsEstacionDestino(newEstacionOrigenVsEstacionDestino)

            toast.success('ESTACIÓN AGREGADA A LA ESTACIÓN DE ORIGEN', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickEliminar = async (codigoEstacionOrigen, codigoEstacionDestino) =>{

        try {

            await clienteAxios.delete(`/api/estaciones-origen-vs-estaciones-destino/eliminar/${ codigoEstacion }/${codigoEstacionDestino}`)
            toast.success('ESTACIÓN DE ORIGEN QUITADA', {containerId: 'sys_msg'})

            const newEstacionOrigenVsEstacionDestino = estacionOrigenVsEstacionDestinos.map(estacionOrigenVsEstacionDestino => {
                if(estacionOrigenVsEstacionDestino.codigo === codigoEstacionDestino){
                    return {
                        ...estacionOrigenVsEstacionDestino,
                        selected: 0,
                    }
                }else{
                    return estacionOrigenVsEstacionDestino
                }
            })

            setestacionOrigenVsEstacionDestino(newEstacionOrigenVsEstacionDestino)

   
         } catch (e) {
            handleError(e)
         }

    } 


    const handleChangeInput = e => {
       setCodigoEstacion( e.target.value)
    }


    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Estaciones Origen VS Estaciones Destino</h5>
            <EstacionList
                    id="codigoEstacion"
                    name="codigoEstacion"
                    value={codigoEstacion}
                    onChange={handleChangeInput}
                    
                />
            <hr/>
            {codigoEstacion !== '0' &&
                <EstacionOrigenVsEstacionDestinoTable
                    codigoEstacion={codigoEstacion}
                    estacionOrigenVsEstacionDestinos={estacionOrigenVsEstacionDestinos}
                    handleClickCrear={handleClickCrear}
                    handleClickEliminar={handleClickEliminar}
                />
            }
            
        </Main>
    )

}

export default EstacionOrigenVsEstacionDestinos