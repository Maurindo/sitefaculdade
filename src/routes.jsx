import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './paginas/home/home.jsx';
import Contato from './paginas/contato/contato.jsx';
import QuemSomos from './paginas/quem-somos/quem-somos.jsx';

function AppRoutes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Contato" element={<Contato />}></Route>
                <Route path="/QuemSomos" element={<QuemSomos />}></Route>
            </Routes>
        </BrowserRouter>
    );    
}

export default AppRoutes;