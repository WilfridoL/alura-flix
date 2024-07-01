import style from './card.module.css'

const Card = (props) => {
  const {categoria, imagen, id, titulo} = props.datosCard
  // const {activarModal} = props

  const activarModal = () =>{
    console.log('active modal');
  }
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
        <button onClick={() => activarModal()}>
          <img src="./img/icon/editar-icon.svg" alt="icon-editar" />
          <span>EDITAR</span>
        </button>
      </div>
    </div>
  )
}

export default Card