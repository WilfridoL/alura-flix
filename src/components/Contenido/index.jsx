import { useEffect, useState } from 'react'
import Categorias from './Categoria'
import style from './contenido.module.css'

const Contenido = () => {
  const [video, setVideo] = useState([])
  const [categoria, setCategoria] = useState([])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://faker-api-three.vercel.app/categorias')
      const data = await res.json()
      setCategoria([...data])
    }
    getData()
  }, [])
  useEffect(() => {
    const getDataVideo = async () => {
      const res = await fetch('https://faker-api-three.vercel.app/card-videos')
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