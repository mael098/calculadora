import "./calculadora.css"
//esla inportacion de estilos
import Botones from "./botones.jsx"

const calcualadoraBonita = () => {
  return (
    <main>
      <input className="Resultado" type="text" value="50" />
      <input className="Displey" type="text" value="25+25" />
      <Botones texto="c" class="gris" />
      <Botones texto="+/-" class="gris" />
      <Botones texto="%" class="gris" />
      <Botones texto="/" class="operacion" />
      <Botones texto="7" class="gris" />
      <Botones texto="8" class="gris" />
      <Botones texto="9" class="gris" />
      <Botones texto="*" class="operacion" />
      <Botones texto="4" class="gris" />
      <Botones texto="5" class="gris" />
      <Botones texto="6" class="gris" />
      <Botones texto="-" class="operacion" />
      <Botones texto="1" class="gris" />
      <Botones texto="2" class="gris" />
      <Botones texto="3" class="gris" />
      <Botones texto="+" class="operacion" />
      <Botones texto="0" class="gris" />
      <Botones texto="." class="gris" />
      <Botones texto="=" class="operacion" />
      
    </main>
  )
}
export default calcualadoraBonita
