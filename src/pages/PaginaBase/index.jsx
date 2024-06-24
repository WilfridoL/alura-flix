import { Outlet } from "react-router-dom"
import Header from "../../components/Header/index.jsx"
import AppRouter from "../../router.jsx"
import Footer from "../../components/Footer/index.jsx"
// import AppRouter from "../../router.jsx"

const Base = () => {
  return (
    <>
    <main>
      <Header/>
      <Outlet />
      <Footer/>
    </main>
  </>
  )
}

export default Base