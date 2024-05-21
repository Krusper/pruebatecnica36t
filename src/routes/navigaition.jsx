import React from 'react'
import Clientes from '../views/Clientes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import AddCliente from '../views/AddCliente'
import EditCliente from '../views/EditCliente'



const Navigation = () => {
  

    return (
      <BrowserRouter>
          <Routes>
               
               
              <Route exact path='/' element={
                
                <PrivateRoute>
                    <Clientes></Clientes>
                </PrivateRoute>
              }/>

              <Route path='/clientes' element={
                
                <PrivateRoute>
                    <Clientes></Clientes>
                </PrivateRoute>
              }/>

              
              <Route path='/clientes/nuevo-cliente' element={
                
                <PrivateRoute>
                    <AddCliente></AddCliente>
                </PrivateRoute>
              }/>

              
              <Route path='/clientes/editar-cliente' element={
                
                <PrivateRoute>
                    <EditCliente></EditCliente>
                </PrivateRoute>
              }/>
  
               
          </Routes>
      </BrowserRouter>
    )
  }
  

export default Navigation