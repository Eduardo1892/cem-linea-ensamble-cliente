import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Container } from 'react-bootstrap'
import Menu from './Menu'
import AuthContext from '../../context/auth/AuthContext'

const Main = props => {

    
    const history = useHistory()
    const { autenticado, usuarioAutenticado } = useContext(AuthContext)

    useEffect(() => {
        
        console.log(autenticado)
        if(!autenticado && !localStorage.getItem('token')){
            history.push('/')
        }else if(!autenticado && localStorage.getItem('token')){
            usuarioAutenticado()
        }
        
        // if(autenticado && localStorage.getItem('token')){
        //     console.log()
        //     history.push('/home')
        // }else if(!autenticado && !localStorage.getItem('token')){
        //     history.push('/')
        // }else if(!autenticado && localStorage.getItem('token')){
        //     usuarioAutenticado()
        // }
       
        // eslint-disable-next-line
    }, [autenticado])


    return ( 
        <>
        <Menu />
        <Container className="pt-3">
            {props.children}
        </Container>
        </>
     )
}
 
export default Main