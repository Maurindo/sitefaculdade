import logo from './imagens/logo.png';
import style from './header.module.css';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <div className={style.corpo}>
            

            <div className={style.imagem}>
                <img className={style.img} src={logo} alt="logo" />
            </div>

            <div className={style.menu}>
                <span><Link to="/">Home |</Link></span>
                <span><Link to={"/QuemSomos"}>Quem somos |</Link></span>
                <span><Link to={"/Contato"}>Contato</Link></span>
            </div>
            
          
        </div>
        
    );
}

export default Header;