import { useContext, useState } from 'react'
import Banner from '../../components/Banner'
import Contenido from '../../components/Contenido'
import EditCardModal from '../../components/ModalEdit'
import style from './home.module.css'
import { Contexto } from '../../context/GobalContext'

const Home = () => {
  const {estaAbierto, openModal, closeModal} = useContext(Contexto)
  return (<div className={style.container}>
    <Banner />
    <Contenido />
    <EditCardModal/>
  </div>
  )
}

export default Home