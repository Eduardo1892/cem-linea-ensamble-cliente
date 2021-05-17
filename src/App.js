import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { SocketProvider } from './context/socket/SocketContext'
import { ToastContainer, Zoom,  } from 'react-toastify'
import Login from './components/pages/Login'
import CodigoBarra from './components/pages/CodigoBarra'
import Estaciones from './components/pages/Estaciones'
import EstacionItems from './components/pages/EstacionItems'
import EstacionStock from './components/pages/EstacionStock'
import EstacionOrigenVsEstacionDestinos from './components/pages/EstacionOrigenVsEstacionDestinos'
import Usuarios from './components/pages/Usuarios'
import Lectores from './components/pages/Lectores'
import Maquinas from './components/pages/Maquinas'
import Home from './components/pages/Home'
import Items from './components/pages/Items'
import AuthState from './context/auth/AuthState'
import Consulta from "./components/pages/Consulta"
import DashBoard from "./components/pages/DashBoard"


function App() {
  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Zoom}
      enableMultiContainer 
      containerId={'sys_msg'}
    />
    <SocketProvider>
      <AuthState>
        <Router>
          <Switch>
              <Route path="/consulta">
                <Consulta />
              </Route>
              <Route path="/codigo-barras">
                <CodigoBarra />
              </Route>
              <Route path="/home">
                <DashBoard />
              </Route>
              <Route path="/estaciones">
                <Estaciones />
              </Route>
              <Route path="/estaciones-items">
                <EstacionItems />
              </Route>
              <Route path="/estaciones-stock">
                <EstacionStock />
              </Route>
              <Route path="/estaciones-origen-estaciones-destino">
                <EstacionOrigenVsEstacionDestinos />
              </Route>
              <Route path="/items">
                <Items />
              </Route>
              <Route path="/lectores">
                <Lectores />
              </Route>
              <Route path="/maquinas">
                <Maquinas />
              </Route>
              <Route path="/usuarios">
                <Usuarios />
              </Route>
              <Route path="/">
                <Login />
              </Route>
          </Switch>
        </Router>
      </AuthState>
    </SocketProvider>
  </>
  )
}

export default App
