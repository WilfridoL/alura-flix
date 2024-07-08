import { useContext } from 'react'
import style from './card.module.css'
import GlobalContext, { Contexto } from '../../../context/GobalContext'

const Card = (props) => {
  const {categoria, imagen, id, titulo} = props.datosCard
  const {openModal} = useContext(Contexto)
  // const {activarModal} = props

  const {activeModal} = useContext(Contexto)
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <img src={`./img/img-card/${imagen}`} alt={titulo} />
      </div>
      <div className={style.containerIconos}>
        <button>
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