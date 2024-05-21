import React from 'react'
import { useClientes } from './hooks/useClientes'
import { useNavegar } from '../../hooks/useNavegar'
import Btn from '../../utils/boton/Btn'


const TablaClientes = () => {

    const {DatosTabla, HandleDatosTabla} = useClientes()
    const {GoNav} = useNavegar()

  return (
    <div className='ContenedorTabla'>
        <table class=" table table-striped">
            <thead class="thead-light">
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Correo</th>
                <th scope="col" style={{textAlign: 'center'}}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    DatosTabla?.map( Res => {
                        return(
                            <tr>
                                <th scope="row">{Res.id}</th>
                                <td>{Res.nombre_comercial}</td>
                                <td>{Res.telefono}</td>
                                <td>{Res.correo}</td>
                                <td>
                                    <div className='ContenedorAcciones'>
                                        <div className='ContenedorBtnAccept'>
                                            <button style={{fontWeight:'bold'}} type="button" class="btn btn-success" onClick={() => GoNav('editar-cliente', Res)}>Editar</button>
                                        </div>
                                        <div className='ContenedorBtnDeny'>
                                            <button style={{fontWeight:'bold'}} type="button" class="btn btn-danger">X</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default TablaClientes