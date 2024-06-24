import { BrowserRouter, Route, Routes } from "react-router-dom"
import Base from "./pages/PaginaBase"
import Home from "./pages/Home"
import NuevoVideo from "./pages/Form"

const AppRouter = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base/>}>
        <Route index element={<Home />} />
        <Route path="/videos" element={<NuevoVideo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default AppRouter
