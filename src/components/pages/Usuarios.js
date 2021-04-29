import React, { useState } from 'react'
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import UsuarioBusqueda from '../ui/UsuarioBusqueda';
import UsuarioTable from '../ui/UsuarioTable';
import Main from '../layout/Main';


const Usuarios = () => {

    const [usuarios, setUsuarios] = useState([])

    const handleClickBuscar = async (filtro) => {

        try{
            
            const resp = await clienteAxios.get('/api/usuarios/buscar',{
                params:{
                   filtro,
                }
            })
            setUsuarios(resp.data.usuarios)
         
        }catch(e){
            handleError(e)
        }
    }

    const handleClickEliminar = async (codigo) =>{

        try {

            await clienteAxios.delete(`/api/usuarios/eliminar/${ codigo }`)
            const newUsuarios = usuarios.filter(usuario => usuario.codigo !== codigo)
            setUsuarios(newUsuarios)
            toast.success('USUARIO ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Usuarios</h5>
            <UsuarioBusqueda
                handleClickBuscar={handleClickBuscar}
            />
            <hr/>
            {usuarios.length > 0 &&
                <UsuarioTable 
                    usuarios={usuarios}
                    handleClickEliminar={handleClickEliminar}
                />
            }
        </Main>
    )

}

export default Usuarios