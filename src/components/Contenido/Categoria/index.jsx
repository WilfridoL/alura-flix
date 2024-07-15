import { useContext } from 'react'
import Card from '../Card'
import style from './categoria.module.css'
import { Contexto } from '../../../context/GobalContext'

const Categorias = ({title, background, datosCard}) => {
  const {eliminarCard} = useContext(Contexto)
  return (
    <div className={style.container}>
      <h1 className={style.titulo} style={{backgroundColor:background}}>{title}</h1>
      <div className={style.cardContainer}>
        {datosCard.map((event) => <Card 
        datosCard={event}
        key={event.id}
        border={background}
        eliminar={eliminarCard}/>)}
      </div>
    </div>
  )
}

export default Categorias