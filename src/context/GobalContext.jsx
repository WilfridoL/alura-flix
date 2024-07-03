import { createContext, useState } from 'react';

export const Contexto = createContext()
const valoresIniciales = {
  ModalState: false
}

const GlobalContext = ({children}) => {
  return (
    <Contexto.Provider value={{}}>
      {children}
    </Contexto.Provider>
  )
}

export default GlobalContext