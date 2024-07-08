import { useContext } from "react"
import { Contexto } from "../../context/GobalContext"
import style from './modal.module.css'
import CampoDeTexto from "../Imputs"
import InputCategoria from "../Imputs/ImputCategoria"
import InputDescripcion from "../Imputs/ImputTextArea"
import Botones from "../Button"

const EditCardModal = () => {
  const { estaAbierto, closeModal, dataCard, limpiarCampo } = useContext(Contexto)
  if (estaAbierto) {
    const { categoria, imagen, id, titulo, descripcion, video } = dataCard
    return <>
      <div className={style.overlay}>
        <dialog className={style.edit}>
          <button type="button" className={style.exit} onClick={closeModal}><img src="./img/icon/cross.svg" alt="" /></button>
          <form action="">
            <h2>EDITAR CARD:</h2>
            <CampoDeTexto
              name={"Título"}
              placeholder={"título"}
              type={"text"}
              datos={titulo} />
            <InputCategoria />
            <CampoDeTexto
              name={"Imagen"}
              placeholder={"enlace de la imagen"}
              type={"url"}
              datos={imagen} />
            <CampoDeTexto
              name={"Video"}
              placeholder={"enlace del video"}
              type={"url"}
              datos={video} />
            <InputDescripcion
              placeholder={"de que trata este video"}
              datos={descripcion} />
            <div className={style.botones}>
              <Botones active={true} type={"submit"}>Guadar</Botones>
              <Botones type={"button"} >Limpiar</Botones>
            </div>
          </form>
        </dialog>
      </div>
    </>
  }
}

export default EditCardModal