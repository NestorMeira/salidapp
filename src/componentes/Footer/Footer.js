import './Footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';

const Footer= ()=>{
    return(
        <div className="footer">
        <button><Link to='/categoria/artesanias' className='linea2'>Arte</Link></button>
        <button><Link to='/categoria/' className='linea2'>Cultura</Link></button>
        <button><Link to='/categoria/deporte' className='linea2'>Deporte</Link></button>
        <button><Link to='/categoria/fiestas' className='linea2'>Fista</Link></button>
        <button><Link to='/categoria/' className='linea2'>Moda</Link></button>
        <button><Link to='/categoria/' className='linea2'>Religión</Link></button>
        <button><Link to='/categoria/restaurante' className='linea2'>Restaurant</Link></button>
        <button><Link to='/categoria/' className='linea2'>Ventas</Link></button>
        <button><Link to='/categoria/' className='linea2'>Otros</Link></button>
        <InstagramIcon className='in' />
        <WhatsAppIcon className='wpp'/>
        <FacebookIcon className='face'/>

        </div>
    )
}

export default Footer