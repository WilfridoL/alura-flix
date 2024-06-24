import style from './footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
      <img src="./img/Logo.svg" alt="" />
      </div>
    </footer>
  )
}

export default Footer