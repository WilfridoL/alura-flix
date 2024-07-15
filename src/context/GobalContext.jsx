import { createContext, useEffect, useState } from 'react';

export const Contexto = createContext()
const GlobalContext = ({ children }) => {
  // modal funcionaes
  const [estaAbierto, setEstaAbirto] = useState(false)
  const [dataCard, setDataCard] = useState()
  const openModal = (data) => {
    setEstaAbirto(true)
    return setDataCard(data)
  }
  const closeModal = () => {
    return setEstaAbirto(false)
  }

  // api funcionalidades

  // metodo POST
  const subirDatos = async (event) => {
    // console.log("nuevo card", event);
    try{
      const response = await fetch('https://faker-api-three.vercel.app/card-videos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
      })
      if(!response){
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // metodo PUT
  const actualizarCard = async (event, id) => {
    console.log("datos recividos", event);
    const response = await fetch(`https://faker-api-three.vercel.app/card-videos/${id}`, {
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

  // metodo DELETE
  const eliminarCard = async (event) => {
    console.log("eliminar card con id:", event);
    try {
      const response = await fetch(`https://faker-api-three.vercel.app/card-videos/${event}`,{
          method: "DELETE",
          headers:{"Content-Type":"application/json"}
      });
      const data = await response.json();
      window.location.reload()
  } catch (error) {
      console.log(`Ha ocurrido un error de tipo: ${error}`);
  }
  }

  return (
    <Contexto.Provider value={{ 
      estaAbierto, 
      openModal, 
      closeModal, 
      dataCard, 
      subirDatos,
      actualizarCard,
      eliminarCard }}>
      {children}
    </Contexto.Provider>
  )
}

export default GlobalContext