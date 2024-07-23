import IMGmeio from './imagens/capa.png'
import styles from './imgmeio.module.css'

function ImgMEio() {
    return(
        <div className={styles.corpo}>
            <div className={styles.esquerdo}></div>
            <img className={styles.meio} src={IMGmeio} alt='capa'/>
            <div className={styles.direito}></div>
            
        </div>
    );
}

export default ImgMEio;