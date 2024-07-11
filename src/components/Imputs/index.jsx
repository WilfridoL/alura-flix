import style from './inputsStyle.module.css'

const CampoDeTexto = ({name, type, placeholder, datos, datosEscritos, tipoDeEstilo}) => {
  const actualizarTexto = (event) => {
    datosEscritos(event.target.value)
    // console.log(datos);
  }
  const inputStyle = {
    borderColor: tipoDeEstilo ? "var(--blue-400)": "#262626",
  }
  return (
    <div className={style.container}>
      <label name={name} className={style.inputs}>{name}</label>
      <input type={type} name={name} 
      placeholder={`ingrese el ${placeholder}`} 
      value={datos} 
      onChange={actualizarTexto}
      className={style.inputs} style={inputStyle}/>
    </div>
  )
}

export default CampoDeTexto