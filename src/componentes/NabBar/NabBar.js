import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import'./NabBar.scss';

const NabBar= ()=>{

return(
    <div className="nabBar">
        <header> 
            <div className="redes">
            <InstagramIcon className='in' /><WhatsAppIcon className='wpp'/><FacebookIcon className='face'/>
            </div>
            <div className='logo'>
            <img src='assets/logo.png'/>
            </div>
        </header>
        <nav>
           <button><Link to='/' className='linea'>INICIO</Link></button>
             
            <ul className="menu">
             <li id="categorias"> categorias <ArrowDropDownIcon className='flecha'/>
              <ul className="submenu-categorias">
                <li><Link to='/categoria/artesanias' className='linea2'>Arte</Link></li>
                <li><Link to='/categoria/' className='linea2'>Cultura</Link></li>
                <li><Link to='/categoria/deporte' className='linea2'>Deporte</Link></li>
                <li><Link to='/categoria/fiestas' className='linea2'>Fista</Link></li>
                <li><Link to='/categoria/' className='linea2'>Moda</Link></li>
                <li><Link to='/categoria/' className='linea2'>Religión</Link></li>
                <li><Link to='/categoria/restaurante' className='linea2'>Restaurant</Link></li>
                <li><Link to='/categoria/' className='linea2'>Ventas</Link></li>
                <li><Link to='/categoria/' className='linea2'>Otros</Link></li>
            </ul>
            </li>
            </ul>
            <button><Link to='/contacto' className='linea'>CONTACTO</Link></button>
        </nav>
    </div>
)
}

export default NabBar