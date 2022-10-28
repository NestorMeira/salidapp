import Publicidad from "../componentes/Utils/Publicidad"
import Publicidades from "../componentes/Publicidades/Publicidades"
import {useState} from 'react'


const ContenedorPublicidad = ({data})=>{

const [listPubli, setListPubli]= useState([])

const getPubli = new Promise ((resolve, rejet)=>{
    resolve(Publicidad)
})

getPubli
.then((res)=>{
    setListPubli(res)
})
.catch((error)=>{
    console.log("llamada fallo")
})
.finally(()=>{

})





    return(
        <div className="lista-publi">
        {listPubli.map( publi => <Publicidades data={publi}/>)}
        </div>
    )
}

export default ContenedorPublicidad