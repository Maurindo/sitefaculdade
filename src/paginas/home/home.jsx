import Faixa from '../../components/faixa-horizontal/faixa';
import Header from '../../components/header/header';
import MeioIMG from '../../components/img-meio/imgmeio'
import Sobre from '../../components/sobre/sobre';

function Home() {
    return (
        <div>
            <Faixa />
            <Header />
            <MeioIMG />
            <Sobre />
            <Faixa />
        </div>
    );
}

export default Home;