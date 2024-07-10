import style from './btn.module.css'

const Botones = ({children, active, type, eventoClick}) => {
  const StyleActive = {
    borderColor: active ? `var(--blue-400)` : `var(--white-200)`,
    background: active ? `#000` : `none`,
    color: active ? `var(--blue-400)` : `var(--white-200)`, 
    boxShadow: active ? `inset 0 0 12px var(--blue-400)` : `none` 
  }
  return (<>
    <button type={type} className={style.btn} style={StyleActive} onClick={eventoClick}>
      {children}
    </button>
  </>
  )
}

export default Botones