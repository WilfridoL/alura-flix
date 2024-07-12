import React from 'react'
import style from'./formulario.module.css'
import Form from '../../components/Formulario'

const NuevoVideo = () => {
  const subirDatos = async (event) => {
    // console.log("nuevo card", event);
    try{
      const response = await fetch('http://localhost:3000/card-videos', {
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
  return <main className={style.containerForm}>
    <div className={style.titulo}>
      <h2>NUEVO VIDEO</h2>
      <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARGETA DE VIDEO</h3>
    </div>
    <div className={style.formulario}>
      <h3>Crear Tarjeta</h3>
      <Form inputStyle={false} metodo={subirDatos}/>
    </div>
  </main>
}

export default NuevoVideo