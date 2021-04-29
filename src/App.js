import Login from './components/pages/Login';
import Estaciones from './components/pages/Estaciones';
import { ToastContainer, Zoom,  } from 'react-toastify'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

console.log('cambio');

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
            <Estaciones />
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
