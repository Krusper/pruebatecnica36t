import React from 'react'
import { LayoutBtn } from '../../../themes/layout'

const Btn = (props) => {
  //    Configuraciones del Input customizado

  //    Identificador     /     Descripcion

  //    type              =     clase de boton (confirmacion "accept" / negacion "deny")
  //    clicked           =     Funcion a realizar al dar click
  //    descript          =     Texto o descripcion dentro del boton
  //    forceLayoutSty    =     Forzar estilo desde la raiz  
  //    forceBtnSty       =     Forzar el estilo del boton en caso de ser de tipo custom

  return (
    <LayoutBtn style={props.forceLayoutSty}>
      {
        props.type === 'add' ?
        
        <button className={`${props.type}`} onClick={()=>props.clicked()}>
            <img className='img-add' src={props.imagen} alt="" />
        </button>

        :
        
        <button className={`${props.type}`} style={props.disabled ? {background:'#4D4D4D'} : props.forceBtnSty} onClick={(e)=>props.clicked(e)} disabled={props.disabled}>
          <div className='btn-cont'>
            <img className='img-descript' style={props.imagen ? {} : {display:'none'}} src={props.imagen} alt='' />
            <p className='txt-descript' style={props.descript ? {} : {display:'none'}}>{props.descript}</p>
          </div>
        </button>
      }
    </LayoutBtn>
  )
}

export default Btn