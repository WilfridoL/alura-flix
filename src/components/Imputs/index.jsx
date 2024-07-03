import style from './inputsStyle.module.css'

const CampoDeTexto = ({name, type, placeholder}) => {
  return (
    <div>
      <label name={name} className={style.inputs}>{name}</label>
      <input type={type} name={name} placeholder={`${placeholder}`} className={style.inputs}/>
    </div>
  )
}

export default CampoDeTexto