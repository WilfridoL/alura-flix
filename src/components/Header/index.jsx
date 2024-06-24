import style from './Header.module.css'
import Botones from '../Button'

const Header = () => {
  return (
    <header className={style.encabezado}>
      <div className={style.logo}>
      <img src="./img/Logo.svg" alt="" />
      </div>
      <ul className={style.links}>
        <Botones active={true}>HOME</Botones>
        <Botones>NUEVO VIDEO</Botones>
      </ul>
    </header>
  )
}

export default Header