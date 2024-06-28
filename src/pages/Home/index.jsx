import Banner from '../../components/Banner'
import Contenido from '../../components/Contenido'
import style from './home.module.css'

const Home = () => {
  return (<div className={style.container}>
    <Banner />
    <Contenido/>
  </div>
  )
}

export default Home