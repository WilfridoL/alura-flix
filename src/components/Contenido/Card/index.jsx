import style from './card.module.css'

const Card = (props) => {
  // const {categoria, imagen, id} = props.db
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
        <img src="./img/img-card/img-1-front-end.png" alt="Ejemplo" />
      </div>
      <div className={style.containerIconos}>
        <button>
          <img src="./img/icon/borrar-icon.svg" alt="icon-borrar" />
          <span>BORRAR</span>
        </button>
        <button>
          <img src="./img/icon/editar-icon.svg" alt="icon-editar" />
          <span>EDITAR</span>
        </button>
      </div>
    </div>
  )
}

export default Card