import Publicidad from "../componentes/Utils/Publicidad"
import Publicidades from "../componentes/Publicidades/Publicidades"
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './ContenedorPublicidad.scss'


const ContenedorPublicidad = ({data})=>{

const { categoriasId } =useParams();
const [listPubli, setListPubli]= useState([])


const filtrarCategoria = Publicidad.filter(e =>e.categoria == categoriasId)

const getProduct= 
new Promise( (resolve,reject) =>{
    setTimeout( () =>{
        if (categoriasId){
     resolve(filtrarCategoria)
    }else{
        resolve(Publicidad)
    }

    }, 1000)
})
   
useEffect( () =>{
    getProduct
.then( (res) =>{
    
    setListPubli(res)
})
.catch( (error)=>{
    console.log("la llamada fallo")
} )
.finally( () =>{
})

},[categoriasId])


    return(
        <div className="lista-publi">
        {listPubli.map( (publi,id) => <Publicidades  key={id} data={publi}/>)}
        </div>
    )
}

export default ContenedorPublicidad