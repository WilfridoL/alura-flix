import style from './btn.module.css'

const Botones = ({children, active, type, eventoClick, tipoDeEstilo}) => {
  const StyleActive = {
    borderColor: active ? `var(--blue-400)` : `var(--white-200)`,
    background: active ? `#000` : `none`,
    color: active ? `var(--blue-400)` : `var(--white-200)`, 
    boxShadow: active ? `inset 0 0 12px var(--blue-400)` : `none` 
  }
  const StyleFormNewVideo = {
    borderColor: active ? `var(--blue-400)` : `var(--white-200)`,
    background: "none",
    color: "var(--white-200)", 
    boxShadow: `none` 
  }
  return (<>
    <button type={type} className={style.btn} style={tipoDeEstilo ? StyleActive: StyleFormNewVideo } onClick={eventoClick}>
      {children}
    </button>
  </>
  )
}

export default Botones