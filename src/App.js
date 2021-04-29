import Login from './components/pages/Login';
import Estaciones from './components/pages/Estaciones'
import Usuarios from './components/pages/Usuarios'
import Lectores from './components/pages/Lectores'
import Home from './components/pages/Home'
import Items from './components/pages/Items';
import { ToastContainer, Zoom,  } from 'react-toastify'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/estaciones">
            <Estaciones />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/lectores">
            <Lectores />
          </Route>
          <Route path="/usuarios">
            <Usuarios />
          </Route>
          <Route path="/">
            <Login />
          </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
