import style from './inputsStyle.module.css'

const CampoDeTexto = ({name, type, placeholder, datos}) => {
  return (
    <div>
      <label name={name} className={style.inputs}>{name}</label>
      <input type={type} name={name} 
      placeholder={`ingrese el ${placeholder}`} 
      value={datos} 
      className={style.inputs}/>
    </div>
  )
}

export default CampoDeTexto