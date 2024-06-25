import style from './btn.module.css'

const Botones = ({children, active}) => {
  const StyleActive = {
    borderColor: active ? `var(--blue-400)` : `var(--white-200)`,
    color: active ? `var(--blue-400)` : `var(--white-200)`, 
    boxShadow: active ? `inset 0 0 12px var(--blue-400)` : `none` 
  }
  return (<>
    <button type="button" className={style.btn} style={StyleActive}>
      {children}
    </button>
  </>
  )
}

export default Botones