import React, { useEffect, useState } from 'react'

const InputCategoria = () => {
  const [categoria, setCategoria] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/categorias')
      const data = await res.json()
      setCategoria([...data])
    }
    getData()
  }, [])
  return (<div>
    <label htmlFor="">Categoria</label>
    <select name="" id="">
      <option value="" selected={true} disabled>Seleccione categoria</option>
      {categoria.map(e => <option key={e.id}>{e.titulo.toLowerCase()}</option>)}
    </select>
  </div>
  )
}

export default InputCategoria