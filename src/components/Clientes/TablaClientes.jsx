import React from 'react'
import { useClientes } from './hooks/useClientes'


const TablaClientes = () => {

    const {DatosTabla, HandleDatosTabla} = useClientes()

  return (
    <table class=" table table-striped">
        <thead class="thead-light">
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
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
                                <button type="button" class="btn btn-success">Editar</button>
                                <button type="button" class="btn btn-danger">X</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default TablaClientes