import React from 'react'
import { LayoutInpt } from '../../themes/layouts'
import useInpt from './useInpt'

const Inpt = (props) => {
  //    Configuraciones del Input customizado

  //    Identificador     /     Descripcion

  //    type              =     Tipo de input (text, number, password, date, select)
  //    placehold         =     Placeholder
  //    value             =     valor del input
  //    setValue          =     funcion para cambiar valor del input
  //    metodo            =     funcion que podria ejecutar el input bajo ciertas circunstancias
  //    haveBtn           =     Mostrar boton junto al input (true / false)
  //    tittle            =     Mostrar texto por encima del input a modo de titulo
  //    maxLength         =     Maximo de caracteres permitido
  //    disabled          =     Deshabilitar el input
  //    colorBtn          =     Asignar el color que tendra el boton
  //    imagen            =     Asignar la imagen que habra dentro del boton
  //    minVal            =     Valor minimo para inputs tipo number
  //    maxVal            =     Valor maximo para inputs tipo number

  //    opciones          =     Recibir las opciones de un select
  //    defaultOpc        =     Texto por defecto de un select

  //    forceLayoutSty    =     Forzar estilo desde el layout
  //    forceInputSty     =     Forzar el estilo directamente al input


  const {KeyDownEnter, ChangedValue} = useInpt(props)

  return (
    <LayoutInpt style={props.forceLayoutSty}>
      {
        props.type === 'text' || props.type === 'password' || props.type === 'date' || props.type === 'number'
        ?

        <div className={props.haveBtn ? 'InptBtn-Distr' : 'OnlyInpt-Distr'}>

          <p className='Titul-core' style={props.tittle ? {} : {display:'none'}}>{props.tittle}</p>

          <input className={props.haveBtn ? 'Inpt-Btn' : 'Inpt'}
                  style={props.forceInputSty}
                  type={props.type}
                  placeholder={props.placehold}
                  value={props.value}
                  onChange={(e)=>props.setValue(e.target.value)}
                  onKeyDown={(e) => KeyDownEnter(e)}
                  maxLength={props.maxLength}
                  disabled={props.disabled}
                  min={props.minVal}
                  max={props.maxVal}

          />

          <button className={props.haveBtn ? 'Btn-Show' : 'Btn-Hide'} style={{background:`${props.colorBtn}`}} onClick={()=>props.metodo()}>
            <img style={{width:'20px'}} src={props.imagen} alt=""  />
          </button>

        </div>
        :

        <div className='InptSlct-Distr'>
          <p className='Titul-core'>{props.tittle}</p>
          <select name="" className='Slct' value={props.value} disabled={props.disabled} onChange={(e)=>ChangedValue(e.target.value, props.metodo)}>
          <option value="" style={props.value === '' ? {} : {display:'none'}}>{props.defaultOpc}</option>
            {
              props.opciones?.map((Opcion =>{
                if (Opcion.hasOwnProperty('key') && Opcion.hasOwnProperty('description')) {
                  return(
                    <option value={Opcion.key}>{Opcion.description}</option>
                  )
                }else if (Opcion.hasOwnProperty('id') && Opcion.hasOwnProperty('nombre')) {
                  return(
                    <option value={Opcion.id}>{Opcion.nombre}</option>
                  )
                }else if (Opcion.hasOwnProperty('id') && Opcion.hasOwnProperty('descripcion')) {
                  return(
                    <option value={Opcion.id}>{Opcion.descripcion}</option>
                  )
                }else if (Opcion.hasOwnProperty('clave') && Opcion.hasOwnProperty('description')) {
                  return(
                    <option value={Opcion.clave}>{Opcion.description}</option>
                  )
                }
                 
                
              }))
            }
          </select>
        </div>
      }
    </LayoutInpt>
  )
}

export default Inpt