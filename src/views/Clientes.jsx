import React, { useState } from 'react'
import TablaClientes from '../components/Clientes/TablaClientes'
import { useNavigate } from 'react-router-dom'


const Clientes = () => {

  const navigate = useNavigate()

  
  return (
    <div className='ClientesBody'>

      
      <button type="button" class="btn btn-primary" onClick={()=> navigate('/')}>Agregar Cliente</button>
      <TablaClientes></TablaClientes>

    </div>
  )
}

export default Clientes