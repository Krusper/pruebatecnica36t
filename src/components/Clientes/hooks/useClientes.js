import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useClientes = () => {

    // const {ObtenerClientes, ObtenerClienteByID, CrearCliente, ActualizarCliente} = useAPI()
    const [DatosTabla, setDatosTabla] = useState()

    const HandleDatosTabla = (data) => setDatosTabla(data)

    
    const ObtenerClientes = async () =>{

        try {
            let config = {
                method: 'get',
                url: "https://package-thumbnail-greater-actual.trycloudflare.com/api/v1/cliente/",
                headers: { 'Content-Type': 'application/json' }
            };
            let ResClientes = await axios(config)
            HandleDatosTabla(ResClientes.data)

        } catch (error) {
            console.error(error)
        }        
    }
    const ObtenerClienteByID = async (idcliente) =>{

        try {
            let config = {
                method: 'get',
                url: `https://package-thumbnail-greater-actual.trycloudflare.com/api/v1/cliente/${idcliente}/`,
                headers: { 'Content-Type': 'application/json' }
            };
            let ResCliente = await axios(config)
            return(ResCliente)

        } catch (error) {
            console.error(error)
        }        
    }



    



    useEffect( () => {
         ObtenerClientes()
    }, [])
    

  return {
    DatosTabla, HandleDatosTabla
  }
}
