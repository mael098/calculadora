import React from 'react'
import ReactDOM from 'react-dom/client'
//impotrta el componente calculadora
import CalcualadoraBonita from './components/calculadora.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcualadoraBonita/>
  </React.StrictMode>,
)
