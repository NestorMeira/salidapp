import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
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
            <button>INICIO</button>
            <button>CATEORIAS</button>
            <button>CONTACTO</button>
        </nav>
    </div>
)
}

export default NabBar