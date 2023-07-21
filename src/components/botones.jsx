import './calculadora.css'

const botones = (params) => {
    const {texto,clase} = params 
     return (
        <button className={clase}>{texto}</button>

     )
}

export default botones