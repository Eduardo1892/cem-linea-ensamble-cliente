import  React, { useState } from 'react'
import ConsultaBusqueda from '../ui/ConsultaBusqueda';
import ConsultaTable from '../ui/ConsultaTable'; 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import Main from '../layout/Main';


function Consulta() {

    const [paquetes, setPaquetes] = useState([])
    
    const handleClickBuscar = async (codigoBarra) => {

       try{
            
            const resp = await clienteAxios.get('/api/paquetes/listar',{
                params:{
                   codigoBarra,
                }
            })

            //console.log(resp.data.paquete)
            setPaquetes(resp.data.paquete)          

        }catch(e){
            handleError(e)
        }
    }
    console.log(paquetes)
    return(
        <Main>
            <h5 className="mt-5 mb-3">Consulta por código de barra</h5>
            <ConsultaBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            {paquetes.length > 0 &&
                <ConsultaTable 
                paquetes={paquetes}
            />
            }
        </Main>    
        
    )

}

export default Consulta