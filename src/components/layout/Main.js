import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from './Menu'

const Main = props => {

    return ( 
        <>
        <Menu />
        <Container>
            {props.children}
        </Container>
        </>

     );
}
 
export default Main;