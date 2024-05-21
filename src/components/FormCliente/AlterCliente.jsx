import React, { useEffect } from 'react'
import Inpt from '../../utils/input/Inpt'
import Btn from '../../utils/boton/Btn'
import { useLocation } from 'react-router-dom'
import { useAlterCliente } from './hooks/useAlterCliente'
import { useNavegar } from '../../hooks/useNavegar'


const AlterCliente = () => {

    const {state} = useLocation()
    const {Nombre, Correo, Telefono, OrigianlData, HandleNombre, HandleCorreo, HandleTelefono, HandleOriginalData, CrearCliente, ActualizarCliente } = useAlterCliente()
    const {GoListCltes} = useNavegar()

    useEffect(() => {
      
        if (state) {
            HandleOriginalData(state)
        }
    }, [])
    

  return (
    <div className='AlterClienteBody'>
        <div className='AlterTitulos'>
            <h1 className='TituloH1'>Información del cliente</h1>
            <p className='txtAlterType'>{state ? 'Editar' : 'Agregar'}</p>
        </div>

        <div className='separador'></div>

        <div className='AlterClienteForm'>
            
            <Inpt
                type='text'
                tittle='Nombre comercial:'
                placehold={state?.nombre}
                value={Nombre}
                setValue={HandleNombre}
                forceLayoutSty={{margin: '2vh 0'}}
            />

            
            <Inpt
                type='text'
                tittle='Correo:'
                placehold={state?.correo}
                value={Correo}
                setValue={HandleCorreo}
                forceLayoutSty={{margin: '2vh 0'}}
            />

            
            <Inpt
                type='text'
                tittle='Teléfono:'
                placehold={state?.telefono}
                value={Telefono}
                setValue={HandleTelefono}
                forceLayoutSty={{margin: '2vh 0'}}
            />

            <div className='OptionsAlter'>
                
                <Btn
                    type='deny'
                    descript='Cancelar'
                    clicked = {() => GoListCltes()}
                    forceLayoutSty={{marginRight: '20px'}}
                />
                
                <Btn
                    type='accept'
                    descript={state ? 'Editar' : 'Agregar'}
                    clicked ={() => state ? ActualizarCliente(Nombre, Telefono, Correo) : CrearCliente(Nombre, Telefono, Correo)}
                    forceLayoutSty={{marginLeft: '20px'}}
                />


            </div>


        </div>
    </div>
  )
}

export default AlterCliente