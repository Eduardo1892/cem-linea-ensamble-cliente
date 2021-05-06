import  React, { useState } from 'react'
import CodigoBarraBusqueda from '../ui/CodigoBarraBusqueda';
import CodigoBarraTable from '../ui/CodigoBarraTable'; 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import Main from '../layout/Main';




function CodigoBarras() {

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
            <h5 className="mt-5 mb-3">Administrar Codigos de barra</h5>
            <CodigoBarraBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            {paquetes.length > 0 &&
                <CodigoBarraTable 
                paquetes={paquetes}
            />
            }
        </Main>    
        
    )

}

export default CodigoBarras