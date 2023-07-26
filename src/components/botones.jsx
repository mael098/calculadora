import'./Botones.css'

const botones = (params) => {
    const {texto,clase, handleClick} = params 
     return (
        <button className={clase} onClick={handleClick}>{texto}</button>


     )
}

export default botones