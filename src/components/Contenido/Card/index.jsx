import { useContext } from 'react'
import style from './card.module.css'
import { Contexto } from '../../../context/GobalContext'

const Card = (props) => {
  const {categoria, imagen, id, titulo} = props.datosCard
  const {openModal} = useContext(Contexto)
  const styleBorde = { borderColor: props.border }
  const styleShadow = {boxShadow: `inset 0 0 17px ${props.border}`}
  const {activeModal} = useContext(Contexto)
  
  return (
    <div className={style.container} style={styleBorde}>
      <div className={style.containerImg}>
      <div className={style.sombra_interna} style={styleShadow}/>
        <img src={imagen} alt={titulo} />
      </div>
      <div className={style.containerIconos} style={styleBorde}>
        <button onClick={() => props.eliminar(id)}>
          <img src="./img/icon/borrar-icon.svg" alt="icon-borrar" />
          <span>BORRAR</span>
        </button>
        <button onClick={() => openModal(props.datosCard)}>
          <img src="./img/icon/editar-icon.svg" alt="icon-editar" />
          <span>EDITAR</span>
        </button>
      </div>
    </div>
  )
}

export default Card