import React from 'react'

const InputDescripcion = ({placeholder, datos, datosEscritos}) => {
  const actualizarTexto = (event) => {
    datosEscritos(event.target.value)
  }
  return (<div>
    <label htmlFor="" >Descripción</label>
    <textarea name="" value={datos} onChange={actualizarTexto} placeholder={placeholder}></textarea>
  </div>
  )
}

export default InputDescripcion