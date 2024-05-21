import React, { useState } from 'react'
import TablaClientes from '../components/Clientes/TablaClientes'
import { useNavigate } from 'react-router-dom'
import Inpt from '../utils/input/Inpt'
import { useNavegar } from '../hooks/useNavegar'


const Clientes = () => {

  const {GoNav} = useNavegar()

  
  return (
    <div className='ClientesBody'>

      <div className='ClientesTools'>
      <Inpt
          type='text'
          // tittle='Buscar'
          placehold='Buscar cliente'
          // value={Usuario}
          // setValue={HandleUsuario}
          // metodo={() => IniciarSesion(Usuario, Contraseña)}
      />
        <button type="button" class="btn btn-primary" onClick={()=> GoNav('nuevo-cliente')}>Agregar Cliente</button>
      </div>
      <TablaClientes></TablaClientes>

    </div>
  )
}

export default Clientes