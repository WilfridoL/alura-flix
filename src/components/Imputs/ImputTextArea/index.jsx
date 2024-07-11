import React from 'react'

const InputDescripcion = ({placeholder, datos, datosEscritos, tipoDeEstilo}) => {
  const actualizarTexto = (event) => {
    datosEscritos(event.target.value)
  }
  const inputStyle = {
    borderColor: tipoDeEstilo ? "var(--blue-400)": "#262626"
  }
  return (<div>
    <label htmlFor="" >Descripción</label>
    <textarea name="" value={datos} onChange={actualizarTexto} placeholder={placeholder} style={inputStyle}></textarea>
  </div>
  )
}

export default InputDescripcion