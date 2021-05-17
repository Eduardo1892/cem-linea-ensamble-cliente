import  React, { useState, useEffect } from 'react'
import clienteAxios from '../../config/clienteAxios'
import EstacionCard from '../ui/EstacionCard'
import { handleError } from '../../helpers'
import Main from '../layout/Main'

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
            <Main>
                {estaciones.length > 0 &&
                    <EstacionCard
                        estaciones={estaciones}
                    />
                }
            </Main>
        </>
    )

}

export default DashBoard;