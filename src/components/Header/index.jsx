import styles from './header.module.css'
import Botones from '../Button'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
  let location = useLocation();
  const activarBtnHome = location.pathname === "/"
  const activarBtnVideo = location.pathname === "/nuevo-video"

  return (
    <header className={styles.encabezado}>
      <div className={styles.logo}>
        <Link to="/"><img src="./img/Logo.svg" alt="" /></Link>
      </div>
      <ul className={styles.links}>
        <Link to="/"><Botones active={activarBtnHome}>HOME</Botones></Link>
        <Link to="/nuevo-video"><Botones active={activarBtnVideo}>NUEVO VIDEO</Botones></Link>
      </ul>
    </header>
  )
}

export default Header