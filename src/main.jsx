import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Base from './pages/PaginaBase'
import AppRoutes from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Base /> */}
    <AppRoutes/>
  </React.StrictMode>,
)
