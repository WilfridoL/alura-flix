import { useContext, useState } from "react"
import { Contexto } from "../../context/GobalContext"
import style from './modal.module.css'
import Form from "../Formulario"


const EditCardModal = ({actualizar}) => {
  const { estaAbierto, closeModal, dataCard } = useContext(Contexto)
  if (estaAbierto) {
    return <>
      <div className={style.overlay}>
        <dialog className={style.edit}>
          <button type="button" className={style.exit} onClick={closeModal}><img src="./img/icon/cross.svg" alt="" /></button>
          <h2 className={style.titulo}>EDITAR CARD:</h2>
          <Form inputStyle={true} metodo={actualizar} data={dataCard}/>
        </dialog>
      </div>
    </>
  }
}

export default EditCardModal