import React, { useState } from 'react'
import CampoDeTexto from "../Imputs"
import InputCategoria from "../Imputs/ImputCategoria"
import InputDescripcion from "../Imputs/ImputTextArea"
import Botones from "../Button"


const Form = ({ inputStyle, metodo }) => {
  const styleForm = {
    display: inputStyle ? "block" : "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "60px 20px",
    margin: "60px 0px 20px 0px"
  }

  const styleBtn = {
    display: "flex",
    justifyContent: inputStyle ? "space-between" : "none",
    gap: inputStyle ? "none" : "30px"
  }

  function limpiar() {
    setdataTitulo("")
    setdataImg("")
    setdataVideo("")
    setdataCategoria("")
    setdataDescripcion("")
  }

  const [titulo, setdataTitulo] = useState("")
  const [imagen, setdataImg] = useState("")
  const [video, setdataVideo] = useState("")
  const [categoria, setdataCategoria] = useState("")
  const [descripcion, setdataDescripcion] = useState("")

  function enviarDatos(e) {
    e.preventDefault()
    // console.log("manejar envio");
    let datosRecibidos = {
      titulo,
      categoria,
      imagen,
      video,
      descripcion
    }
    metodo(datosRecibidos)
  }
  return <>
    <form action="" onSubmit={enviarDatos}>
      <div style={styleForm}>
        <CampoDeTexto
          name={"Título"}
          placeholder={"título"}
          type={"text"}
          datos={titulo}
          datosEscritos={setdataTitulo}
          tipoDeEstilo={inputStyle} />
        <InputCategoria
          data={categoria}
          actualizarCategoria={setdataCategoria}
          tipoDeEstilo={inputStyle} />
        <CampoDeTexto
          name={"Imagen"}
          placeholder={"enlace de la imagen"}
          type={"url"}
          datos={imagen}
          datosEscritos={setdataImg}
          tipoDeEstilo={inputStyle} />
        <CampoDeTexto
          name={"Video"}
          placeholder={"enlace del video"}
          type={"url"}
          datos={video}
          datosEscritos={setdataVideo}
          tipoDeEstilo={inputStyle} />
        <InputDescripcion
          placeholder={"¿de qué trata este vídeo?"}
          datos={descripcion}
          datosEscritos={setdataDescripcion}
          tipoDeEstilo={inputStyle} />
      </div>
      <div style={styleBtn}>
        <Botones active={true} type={"submit"} tipoDeEstilo={inputStyle}>Guadar</Botones>
        <Botones type={"button"} eventoClick={limpiar} tipoDeEstilo={inputStyle}>Limpiar</Botones>
      </div>
    </form>
  </>
}

export default Form