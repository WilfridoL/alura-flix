import { BrowserRouter, Route, Routes } from "react-router-dom"
import Base from "./pages/PaginaBase"
import Home from "./pages/Home"

const AppRouter = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default AppRouter
