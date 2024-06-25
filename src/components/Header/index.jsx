import styles from './header.module.css'
import Botones from '../Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.encabezado}>
      <div className={styles.logo}>
        <Link to="/"><img src="./img/Logo.svg" alt="" /></Link>
      </div>
      <ul className={styles.links}>
        <Link to="/"><Botones active={true}>HOME</Botones></Link>
        <Link to="/videos"><Botones>NUEVO VIDEO</Botones></Link>
      </ul>
    </header>
  )
}

export default Header