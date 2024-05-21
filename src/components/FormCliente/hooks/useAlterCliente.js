import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavegar } from '../../../hooks/useNavegar'

export const useAlterCliente = () => {
    
    const {GoListCltes} = useNavegar()

    const [Nombre, setNombre] = useState()
    const [Correo, setCorreo] = useState()
    const [Telefono, setTelefono] = useState()
    const [OrigianlData, setOrigianlData] = useState()    

    const HandleNombre = (data) => setNombre(data)
    const HandleCorreo = (data) => setCorreo(data)
    const HandleTelefono = (data) => setTelefono(data)
    const HandleOriginalData = (data) => setOrigianlData(data) 


    const VerificarCorreo = (correo) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo)
    }


    const CrearCliente = async (nombre, telefono, correo) =>{

        
        if (VerificarCorreo(correo)) {
            
            try {
    
                let datosCliente = {
                    "nombre_comercial": `${nombre}`,
                    "telefono": `${telefono}`,
                    "correo": `${correo}`
                }
                let config = {
                    method: 'post',
                    url: `https://package-thumbnail-greater-actual.trycloudflare.com/api/v1/clientes/`,
                    headers: { 'Content-Type': 'application/json' },
                    data: datosCliente
                };
                let ResCreacionCliente = await axios(config)
                if (ResCreacionCliente.status == 201) {
                    Swal.fire({
                        title: 'Cliente creado',
                        // text: `Cliente agregado correctamente`,
                        icon: 'succes',
                        timer: 1000,
                        timerProgressBar: true,
                        position: 'top',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#52C150'
                    })
                    .then(res => {
                        if (res.isConfirmed || res.dismiss == Swal.DismissReason.timer) {
                            GoListCltes()   
                        }
                    })
                }
    
            } catch (error) {
                console.error(error)
            }        
        }else{
            Swal.fire({
                title: 'El correo no es valido',
                text: `Verifique el dato`,
                icon: 'warning',
                timer: 2500,
                timerProgressBar: true,
                position: 'top',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#52C150'
            })
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
            if (ResEdicionCliente.status == 201) {
                Swal.fire({
                    title: 'Cliente editado',
                    // text: `Cliente agregado correctamente`,
                    icon: 'succes',
                    timer: 1000,
                    timerProgressBar: true,
                    position: 'top',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#52C150'
                })
                .then(res => {
                    if (res.isConfirmed || res.dismiss == Swal.DismissReason.timer) {
                        GoListCltes()   
                    }
                })
            }

        } catch (error) {
            console.error(error)
        }        
    }

  return {
    Nombre, Correo, Telefono, HandleNombre, HandleCorreo, HandleTelefono, OrigianlData, HandleOriginalData,
    CrearCliente, ActualizarCliente
  }
}
