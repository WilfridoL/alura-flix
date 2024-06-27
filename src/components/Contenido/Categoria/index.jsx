import Card from '../Card'
import style from './categoria.module.css'

const Categorias = ({title, background, datosCard}) => {
  return (
    <div className={style.container}>
      <h1 className={style.titulo} style={{backgroundColor:background}}>{title}</h1>
      <div className={style.cardContainer}>
        <Card db={datosCard}/>
      </div>
    </div>
  )
}

export default Categorias