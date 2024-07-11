import React from 'react'
import style from'./formulario.module.css'
import Form from '../../components/Formulario'

const NuevoVideo = () => {
  return <main className={style.containerForm}>
    <div className={style.titulo}>
      <h2>NUEVO VIDEO</h2>
      <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARGETA DE VIDEO</h3>
    </div>
    <div className={style.formulario}>
      <h3>Crear Tarjeta</h3>
      <Form inputStyle={false}/>
    </div>
  </main>
}

export default NuevoVideo