import  React, { useState, useEffect } from 'react'
import CodigoBarraForm from '../ui/CodigoBarraForm'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main'
import CodigoBarraTable from '../ui/CodigoBarraTable'



function CodigoBarra() {

    const [codigoBarras, setCodigoBarras] = useState([])
    const [formulario, setFormulario] = useState({
        codigoBarra: '',
        codigoItem: '0',
    })
    const {  codigoItem } = formulario


    useEffect(() => {
        
        const getCodigoBarras = async (req, res) => {

            try{
                const resp = await clienteAxios.get('/api/codigo-barra/listar', {
                    params:{
                        codigoItem
                    }
                })
                setCodigoBarras(resp.data.codigoBarras)
               
            }catch(e){
                handleError(e)
            }

        }
        getCodigoBarras()
        

    }, [codigoItem])

   
    const handleClickCrear = async (codigoBarra, codigoItem) => {
        
        try{
            await clienteAxios.post('/api/codigo-barra/crear',{
                codigoBarra, 
                codigoItem, 
            })

            setCodigoBarras([
                ...codigoBarras,
                {
                    codigo_barra: codigoBarra,
                    codigo_item: codigoItem
                }
            ])

            toast.dark('CODIGO BARRA CREADO', {containerId: 'sys_msg'})   

        }catch(e){
            handleError(e)
        }

    }

    const handleClickEliminar = async (codigo_barra) =>{

        
        try {

            await clienteAxios.delete(`/api/codigo-barra/eliminar/${ codigo_barra }`)

            const newCodigoBarras = codigoBarras.filter(codigoBarra => codigoBarra.codigo_barra !== codigo_barra)
            setCodigoBarras(newCodigoBarras)
            toast.dark('CÓDIGO BARRA ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Codigo Barras</h5>
            
                <CodigoBarraForm
                    formulario={formulario}
                    setFormulario={setFormulario}
                    handleClickCrear={handleClickCrear}
                />                
                <>                
                <hr/>
                {codigoBarras.length > 0 &&
                    <CodigoBarraTable 
                        codigoBarras={codigoBarras}
                        handleClickEliminar={handleClickEliminar}
                    />
                }
                </>
        </Main>    
        
    )

}

export default CodigoBarra