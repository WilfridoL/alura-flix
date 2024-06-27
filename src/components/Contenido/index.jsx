import Categorias from './Categoria'
import style from './contenido.module.css'
import { useState, useEffect } from 'react'

const Contenido = () => {
  const [categoria, setCategoria] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/categorias')
      const data = await res.json()
      setCategoria([...data])
    }
    getData()
  }, [])
  return (
    <div className={style.container}>
      {categoria.map(event => <Categorias 
      title={event.titulo} 
      background={event.color}
      key={event.id}/>)}
    </div>
  )
}

export default Contenido