import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavegar = () => {

    const navigate = useNavigate()


    const GoNav = (nav, data) =>{
        if (nav == 'editar-cliente') {
            // alert('editar')
            navigate('editar-cliente', {state:{
                "nombre": data.nombre_comercial,
                "telefono": data.telefono,
                "correo": data.correo
            }})
            
        } else {
            // alert('agregar')
            navigate('nuevo-cliente')
        }
    }

    const GoListCltes = () =>{
        navigate('/clientes')
    }

  return {
    GoNav, GoListCltes
  }
}
