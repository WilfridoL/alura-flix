import style from './banner.module.css'
import banner from './banner.png'

const Banner = () => {
  const imgBck = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div className={style.container} style={imgBck}>
      <div className={style.texto}>
        <span>FRONT END</span>
        <div className="">
        <h4>Challenge React</h4>
        <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
      </div>
      <div className={style.imagen}>
        {/* <img src="./img/" alt="" /> */}
      </div>
    </div>
  )
}

export default Banner