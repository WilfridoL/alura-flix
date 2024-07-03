import { useContext } from "react"
import { Contexto } from "../../context/GobalContext"
import style from './modal.module.css'
import CampoDeTexto from "../Imputs"
import InputCategoria from "../Imputs/ImputCategoria"
import InputDescripcion from "../Imputs/ImputTextArea"
import Botones from "../Button"

const EditCardModal = (valor) => {
 return <>
 <div className={style.overlay}>
  <dialog open className={style.edit}>
    <button type="button" className={style.exit}><img src="./img/icon/cross.svg" alt="" /></button>
    <form action="">
      <h2>EDITAR CARD:</h2>
      <CampoDeTexto name={"Título"} placeholder={"ingrese titulo"} type={"text"}/>
      <InputCategoria />
      <CampoDeTexto name={"Imagen"} placeholder={"ingrese titulo"} type={"url"}/>
      <CampoDeTexto name={"Video"} placeholder={"ingrese titulo"} type={"url"}/>
      <InputDescripcion placeholder={"de que trata este video"}/>
      <div className={style.botones}>
        <Botones>Guadar</Botones>
        <Botones>Limpiar</Botones>
      </div>
    </form>
  </dialog>
  </div>
 </>
}

export default EditCardModal