import Banner from '../../components/Banner'
import Contenido from '../../components/Contenido'
import EditCardModal from '../../components/ModalEdit'
import style from './home.module.css'

const Home = () => {
  return (<div className={style.container}>
    <Banner />
    <Contenido />
    <EditCardModal />
  </div>
  )
}

export default Home