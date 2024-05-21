import React from 'react'
import Clientes from '../views/Clientes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './privateRoute'



const Navigation = () => {
  

    return (
      <BrowserRouter>
          <Routes>
               
              <Route path='/clientes' element={
                
                <PrivateRoute>
                    <Clientes></Clientes>
                </PrivateRoute>
              }/>

              
              <Route path='/nuevo-cliente' element={
                
                <PrivateRoute>
                    <Clientes></Clientes>
                </PrivateRoute>
              }/>

              
              <Route path='/editar/:idcliente' element={
                
                <PrivateRoute>
                    <Clientes></Clientes>
                </PrivateRoute>
              }/>
  
               
          </Routes>
      </BrowserRouter>
    )
  }
  

export default Navigation