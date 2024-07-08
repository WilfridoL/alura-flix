import { createContext, useState } from 'react';

export const Contexto = createContext()
const GlobalContext = ({ children }) => {
  const [estaAbierto, setEstaAbirto] = useState(false)
  const [dataCard, setDataCard] = useState()
  const openModal = (data) => {
    setEstaAbirto(true)
    return setDataCard(data)
  }
  const closeModal = () => {
    return setEstaAbirto(false)
  }
  return (
    <Contexto.Provider value={{ estaAbierto, openModal, closeModal, dataCard }}>
      {children}
    </Contexto.Provider>
  )
}

export default GlobalContext