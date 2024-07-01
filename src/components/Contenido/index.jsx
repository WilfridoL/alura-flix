import Categorias from './Categoria'
import style from './contenido.module.css'
import { useState, useEffect } from 'react'

const Contenido = () => {
  const [categoria, setCategoria] = useState([])
  const [video, setVideo] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:3000/categorias')
      const data = await res.json()
      setCategoria([...data])
    }
    getData()
  }, [])
  useEffect(() => {
    const getDataVideo = async () => {
      const res = await fetch('http://localhost:3000/card-videos')
      const data = await res.json()
      setVideo([...data])
    }
    getDataVideo()
  }, [])
  return (
    <div className={style.container}>
      {categoria.map(event => <Categorias 
      title={event.titulo} 
      background={event.color}
      key={event.id}
      datosCard={video.filter(e => e.categoria === event.titulo)}/>)}
    </div>
  )
}

export default Contenido