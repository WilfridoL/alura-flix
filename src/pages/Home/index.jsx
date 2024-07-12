import { useContext, useState } from 'react'
import Banner from '../../components/Banner'
import Contenido from '../../components/Contenido'
import EditCardModal from '../../components/ModalEdit'
import style from './home.module.css'
import { Contexto } from '../../context/GobalContext'
import CampoDeTexto from '../../components/Imputs'

const Home = () => {
  const { closeModal} = useContext(Contexto)
  
  const actualizarCard = async (event, id) => {
    console.log("datos recividos", event);
    const response = await fetch(`http://localhost:3000/card-videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
  
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.statusText);
    }
    window.location.reload()
    closeModal()
    return await response.json();
  }
  const { estaAbierto } = useContext(Contexto)

  return (<div className={style.container}>
    <Banner />
    <Contenido />
    <EditCardModal actualizar={actualizarCard} />
  </div>
  )
}

export default Home