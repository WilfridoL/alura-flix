import React, { useEffect, useState } from 'react'

const InputCategoria = ({actualizarCategoria, data}) => {
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
  return (<div>
    <label htmlFor="">Categoria</label>
    <select name="" id="" value={data} onChange={actualizarOpciones}>
      <option value="" defaultValue="" selected={true} hidden>Seleccione categoria</option>
      {categoria.map(e => <option key={e.id} value={e.titulo}>{e.titulo.toLowerCase()}</option>)}
    </select>
  </div>
  )
}

export default InputCategoria