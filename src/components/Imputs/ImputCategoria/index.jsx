import React, { useEffect, useState } from 'react'

const InputCategoria = ({actualizarCategoria, data, tipoDeEstilo, requerido}) => {
  const [categoria, setCategoria] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/categorias')
      const data = await res.json()
      setCategoria([...data])
    }
    getData()
  }, [])
  const actualizarOpciones = (event) => {
    actualizarCategoria(event.target.value)
    // console.log(event.target.value);
  }
  const inputStyle = {
    borderColor: tipoDeEstilo ? "var(--blue-400)": "#262626"
  }
  return (<div>
    <label htmlFor="">Categoria</label>
    <select 
    value={data} 
    onChange={actualizarOpciones} 
    style={inputStyle}
    required={requerido}>
      <option value="" defaultValue="" selected={true} hidden>Seleccione una categoría</option>
      {categoria.map(e => <option key={e.id} value={e.titulo}>{e.titulo.toLowerCase()}</option>)}
    </select>
  </div>
  )
}

export default InputCategoria