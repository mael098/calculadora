import Botones from "./botones.jsx"

import "./calculadora.css"
//esla inportacion de estilos

const calcualadoraBonita = () => {
  return (
    <main>
      <input className="Resultado" type="text" value="50" />
      <input className="Displey" type="text" value="25+25" />
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
      <Botones texto="0" clase='numero' />
      <Botones texto="." clase='numero' />
      <Botones texto="=" clase='operacion' />
      
    </main>
  )
}
export default calcualadoraBonita
