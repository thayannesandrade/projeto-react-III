import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portifolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'

function ApplicationRoutes() {
    return(
        <BrowserRouter>
                <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="comentarios" element={<Comentarios />} />
            </Routes>
                <Footer />
            
        </BrowserRouter>
    ) 
}

export default ApplicationRoutes
