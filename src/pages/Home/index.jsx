import { useContext} from 'react'
import Banner from '../../components/Banner'
import Contenido from '../../components/Contenido'
import EditCardModal from '../../components/ModalEdit'
import style from './home.module.css'
import { Contexto } from '../../context/GobalContext'

const Home = () => {
  const { actualizarCard} = useContext(Contexto)

  return (<div className={style.container}>
    <Banner />
    <Contenido />
    <EditCardModal actualizar={actualizarCard} />
  </div>
  )
}

export default Home