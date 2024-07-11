import { BrowserRouter, Route, Routes } from "react-router-dom"
import Base from "./pages/PaginaBase"
import Home from "./pages/Home"
import NuevoVideo from "./pages/Nuevo Video"

const AppRouter = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base/>}>
        <Route index element={<Home />} />
        <Route path="/nuevo-video" element={<NuevoVideo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default AppRouter
