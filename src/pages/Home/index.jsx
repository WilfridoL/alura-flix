import { useContext, useState } from 'react'
import Banner from '../../components/Banner'
import Contenido from '../../components/Contenido'
import EditCardModal from '../../components/ModalEdit'
import style from './home.module.css'
import { Contexto } from '../../context/GobalContext'
import CampoDeTexto from '../../components/Imputs'

const Home = () => {
  const {estaAbierto} = useContext(Contexto)
  // if(estaAbierto){
  //   const bodyFixed = {
  //     overflow: hidden
  //   }
  // }

  return (<div className={style.container}>
    <Banner />
    <Contenido />
    <EditCardModal/>
  </div>
  )
}

export default Home