import React, { useState } from 'react'
import ItemBusqueda from '../ui/ItemBusqueda'
import ItemTable from '../ui/ItemTable' 
import clienteAxios from '../../config/clienteAxios'
import { handleError } from '../../helpers'
import { toast } from 'react-toastify'
import Main from '../layout/Main'
import ItemForm from '../ui/ItemForm'
import { Button, Col, Row } from 'react-bootstrap'




const Items = () => {

    const [items, setItems] = useState([])
    const [itemModificar, setItemModificar] = useState(null)
    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const handleClickBuscar = async (filtro) => {

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

        try {

            await clienteAxios.delete(`/api/items/eliminar/${ codigo }`)
            const newItems = items.filter(item => item.codigo !== codigo)
            setItems(newItems)
            toast.dark('ITEM ELIMINADO', {containerId: 'sys_msg'})
   
         } catch (e) {
            handleError(e)
         }

    }

    const handleClickCrear = () => {
        setItemModificar(null)
        setMostrarFormulario(true)
    }

    const handleClickModificar = item => {
        setItemModificar(item)
        setMostrarFormulario(true)
    }

    const handleClickVolver = () => {
        setMostrarFormulario(false)
    }

    return(
        <Main>
            <h5 className="mt-5 mb-3">Administrar Items</h5>
            {mostrarFormulario
            ?
                <ItemForm
                    itemModificar={itemModificar}
                    handleClickVolver={handleClickVolver}
                />  
            :
                <>
                <Row>
                    <Col>
                    <ItemBusqueda
                        handleClickBuscar={handleClickBuscar}
                    />
                    </Col>
                    <Col xs={"auto"}>
                        <Button
                            variant="dark"
                            onClick={handleClickCrear}
                        >
                            + Crear
                        </Button>
                    </Col>
                </Row>
                
                <hr/>
                {items.length > 0 && 
                    <ItemTable
                        items={items}
                        handleClickEliminar={handleClickEliminar}
                        handleClickModificar={handleClickModificar}
                    />
                }
                </>
            
            }
        </Main>
    )

}

export default Items