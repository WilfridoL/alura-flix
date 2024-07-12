import Card from '../Card'
import style from './categoria.module.css'

const Categorias = ({title, background, datosCard}) => {
  const eliminarCard = async (event) => {
    console.log("eliminar card con id:", event);
    try {
      const response = await fetch(`http://localhost:3000/card-videos/${event}`,{
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
    <div className={style.container}>
      <h1 className={style.titulo} style={{backgroundColor:background}}>{title}</h1>
      <div className={style.cardContainer}>
        {datosCard.map((event) => <Card 
        datosCard={event}
        key={event.id}
        eliminar={eliminarCard}/>)}
      </div>
    </div>
  )
}

export default Categorias