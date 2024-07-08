import React from 'react'

const InputDescripcion = ({placeholder, datos}) => {
  return (<div>
    <label htmlFor="" >Descripción</label>
    <textarea name="" value={datos} placeholder={placeholder}></textarea>
  </div>
  )
}

export default InputDescripcion