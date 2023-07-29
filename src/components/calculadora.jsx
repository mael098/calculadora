import { useState } from "react"
import Botones from "./botones.jsx"

import "./calculadora.css"
//esla inportacion de estilos

const calcualadoraBonita = () => {
  const [data, setData] = useState({ operacion: "", resultado: "" })

  const escritura = (event) => {
   if (data.operacion.length >= 10  ) return
  
    setData({ ...data, operacion: `${data.operacion}` + event.target.innerText })
  }
   const eliminar =() =>  {
    setData({...data,operacion:data.operacion.slice(0,data.operacion.length-1)})
    
   }
   const limpiar = () => {
    setData({operacion:"",resultado:""})

   }

   const resultado = () => {
    const resultado = eval(data.operacion)
    setData({...data,resultado})
   }



  return (
    <main>
      <span className="Resultado">{data.resultado}</span>
      <span className="Displey">{data.operacion}</span>
      <Botones texto="c" clase="operacion" handleClick={limpiar}/>
      <Botones texto="+/-" clase="operacion" />
      <Botones texto="%" clase="operacion" />
      <Botones texto="/" clase="operacion" handleClick={escritura}/>
      <Botones texto="7" clase="numero" handleClick={escritura} />
      <Botones texto="8" clase="numero" handleClick={escritura} />
      <Botones texto="9" clase="numero" handleClick={escritura} />
      <Botones texto="*" clase="operacion" handleClick={escritura}/>
      <Botones texto="4" clase="numero" handleClick={escritura} />
      <Botones texto="5" clase="numero" handleClick={escritura} />
      <Botones texto="6" clase="numero" handleClick={escritura} />
      <Botones texto="-" clase="operacion" handleClick={escritura}/>
      <Botones texto="1" clase="numero" handleClick={escritura} />
      <Botones texto="2" clase="numero" handleClick={escritura} />
      <Botones texto="3" clase="numero" handleClick={escritura} />
      <Botones texto="+" clase="operacion" handleClick={escritura}/>
      <Botones texto="." clase="numero" handleClick={escritura} />
      <Botones texto="0" clase="numero" handleClick={escritura} />
      <Botones texto="<" clase="numero" handleClick={eliminar}/>
      <Botones texto="=" clase="operacion" handleClick={resultado} />
    </main>
  )
}
export default calcualadoraBonita
