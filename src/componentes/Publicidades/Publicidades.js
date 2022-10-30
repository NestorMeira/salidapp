import './Publicidades.scss'


const Publicidades = ({data})=>{

const {titulo, imagen,fecha,hora,lugar,precio,telefono} = data



    return(
        <div className="contenedor-publi">
            <h2>{titulo}</h2>
            <div className='contenedor-img'>
            <img src={`/assets/${imagen}`}/>
            </div>
            <div className="descripcion">
            <h3>{fecha}</h3>
            <h3>{hora}</h3>
            <h3>{lugar}</h3>
            <h3>{precio}</h3>
            <h3>{telefono}</h3>
            </div>
        </div>
    )
}

export default Publicidades