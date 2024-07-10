import { useContext, useState } from "react"
import { Contexto } from "../../context/GobalContext"
import style from './modal.module.css'
import CampoDeTexto from "../Imputs"
import InputCategoria from "../Imputs/ImputCategoria"
import InputDescripcion from "../Imputs/ImputTextArea"
import Botones from "../Button"


const EditCardModal = () => {
  const { estaAbierto, closeModal, dataCard } = useContext(Contexto)
  if (estaAbierto) {
    const { categoria, imagen, id, titulo, descripcion, video } = dataCard
    const [dataTitulo, setdataTitulo] = useState(titulo)
    const [dataImg, setdataImg] = useState(imagen)
    const [dataVideo, setdataVideo] = useState(video)
    const [dataCategoria, setdataCategoria] = useState(categoria)
    const [dataDescripcion, setdataDescripcion] = useState(descripcion)
    function limpiar() {
      setdataTitulo("")
      setdataImg("")
      setdataVideo("")
      setdataCategoria("")
      setdataDescripcion("")
    }
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
              datos={dataTitulo}
              datosEscritos={setdataTitulo} />
            <InputCategoria
              data={dataCategoria}
              actualizarCategoria={setdataCategoria} />
            <CampoDeTexto
              name={"Imagen"}
              placeholder={"enlace de la imagen"}
              type={"url"}
              datos={dataImg}
              datosEscritos={setdataImg} />
            <CampoDeTexto
              name={"Video"}
              placeholder={"enlace del video"}
              type={"url"}
              datos={dataVideo}
              datosEscritos={setdataVideo} />
            <InputDescripcion
              placeholder={"de que trata este video"}
              datos={dataDescripcion}
              datosEscritos={setdataDescripcion} />
            <div className={style.botones}>
              <Botones active={true} type={"submit"}>Guadar</Botones>
              <Botones type={"button"} eventoClick={limpiar}>Limpiar</Botones>
            </div>
          </form>
        </dialog>
      </div>
    </>
  }
}

export default EditCardModal