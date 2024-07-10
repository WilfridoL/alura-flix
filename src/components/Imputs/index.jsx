import style from './inputsStyle.module.css'

const CampoDeTexto = ({name, type, placeholder, datos, datosEscritos}) => {
  const actualizarTexto = (event) => {
    datosEscritos(event.target.value)
    // console.log(datos);
  }
  return (
    <div>
      <label name={name} className={style.inputs}>{name}</label>
      <input type={type} name={name} 
      placeholder={`ingrese el ${placeholder}`} 
      value={datos} 
      onChange={actualizarTexto}
      className={style.inputs}/>
    </div>
  )
}

export default CampoDeTexto