import axios from 'axios'
import React from 'react'

export const useAPI = () => {


    const ObtenerClientes = async () =>{

        try {
            let config = {
                method: 'get',
                url: "https://package-thumbnail-greater-actual.trycloudflare.com/api/v1/cliente/",
                headers: { 'Content-Type': 'application/json' }
            };
            let ResClientes = await axios(config)
            return(ResClientes.data);

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
    const CrearCliente = async (nombre, telefono, correo) =>{

        try {

            let datosCliente = {
                "nombre_comercial": `${nombre}`,
                "telefono": `${telefono}`,
                "correo": `${correo}`
            }
            let config = {
                method: 'post',
                url: `https://package-thumbnail-greater-actual.trycloudflare.com/api/v1/cliente/`,
                headers: { 'Content-Type': 'application/json' },
                data: datosCliente
            };
            let ResCreacionCliente = await axios(config)
            console.log(ResCreacionCliente);
            // return(ResCreacionCliente)

        } catch (error) {
            console.error(error)
        }        
    }
    const ActualizarCliente = async (nombre, telefono, correo) =>{

        try {

            let datosCliente = {
                "nombre_comercial": `${nombre}`,
                "telefono": `${telefono}`,
                "correo": `${correo}`
            }
            let config = {
                method: 'patch',
                url: `https://package-thumbnail-greater-actual.trycloudflare.com/api/v1/cliente/`,
                headers: { 'Content-Type': 'application/json' },
                data: datosCliente
            };
            let ResEdicionCliente = await axios(config)
            console.log(ResEdicionCliente);
            // return(ResEdicionCliente)

        } catch (error) {
            console.error(error)
        }        
    }

  return {
    ObtenerClientes, ObtenerClienteByID, CrearCliente, ActualizarCliente
  }
}
