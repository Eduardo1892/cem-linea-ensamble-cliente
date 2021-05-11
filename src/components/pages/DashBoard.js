import  React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/clienteAxios'
import EstacionCard from '../ui/EstacionCard'
import { handleError } from '../../helpers'


const DashBoard = () => {

    const [estaciones, setEstaciones] = useState([])

    useEffect(() => {
        
        const getEstaciones = async () => {

            try{
                const resp = await clienteAxios.get('/api/dashboard/listar')
                setEstaciones(resp.data.estaciones)
                console.log(resp.data.estaciones) 
            }catch(e){
                handleError(e)
            }

        }
        getEstaciones()

    }, [])


    return(
        <>
            {estaciones.length > 0 &&
                <EstacionCard
                    estaciones={estaciones}
                />
            }
        </>
    )

}

export default DashBoard;