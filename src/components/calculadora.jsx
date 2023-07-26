import { useState } from "react"
import Botones from "./botones.jsx"

import "./calculadora.css"
//esla inportacion de estilos

const calcualadoraBonita = () => {
   const [data, setData] = useState({operacion: "", resultado: ""})

   const escritura = (event) =>{
    setData({...data,operacion: `${data.operacion}` + event.target.innerText})

   }
   


   

  return (
    <main>
      <span className="Resultado">{data.resultado}</span>
      <span className="Displey">{data.operacion}</span>
      <Botones texto="c" clase='operacion' />
      <Botones texto="+/-" clase='operacion' />
      <Botones texto="%" clase='operacion' />
      <Botones texto="/" clase='operacion' />
      <Botones texto="7" clase='numero' />
      <Botones texto="8" clase='numero' />
      <Botones texto="9" clase='numero' />
      <Botones texto="*" clase='operacion' />
      <Botones texto="4" clase='numero' />
      <Botones texto="5" clase='numero' />
      <Botones texto="6" clase='numero' />
      <Botones texto="-" clase='operacion' />
      <Botones texto="1" clase='numero' />
      <Botones texto="2" clase='numero' />
      <Botones texto="3" clase='numero' />
      <Botones texto="+" clase='operacion' />
      <Botones texto="0" clase='numero' handleClick={escritura}/>
      <Botones texto="." clase='numero' />
      <Botones texto="=" clase='operacion' />
      
    </main>
  )
}
export default calcualadoraBonita
