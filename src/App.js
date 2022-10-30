import NabBar from "./componentes/NabBar/NabBar";
import ContenedorPublicidad from "./ContenedorPublicidad/ContenedorPublicidad";
import Footer from "./componentes/Footer/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'








function App() {
  return (
  <BrowserRouter>
   <NabBar/>
   <Routes>
         <Route path='/' element={<ContenedorPublicidad/>}/>
         <Route path='/categoria/:categoriasId' element={<ContenedorPublicidad/>}/> 
         <Route path='*' element={<h1>ERROR 404 -página no encontrada</h1>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
