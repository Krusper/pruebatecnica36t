import React from 'react'

const useInpt = (props) => {

    
  const KeyDownEnter = (e) =>{
    if (e.keyCode === 13 && props.metodo) {
      e.preventDefault()
      props.metodo(e)
    }
  }



  const ChangedValue = (val) =>{
      props.setValue(val)
      if (props.metodo) {
        props.metodo()
        
      }
  }

  return {
    KeyDownEnter, ChangedValue
  }
}

export default useInpt