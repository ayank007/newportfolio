import {NavCtxProvider} from './context/openNavpage'
import Navbar from './components/Navbar'
import Navpage from "./components/Navpage"
import NotFound from './components/NotFound'
import App from './App'
import Freelancing from "./Projects/Freelancing"
import BankBuddy from "./Projects/Bankbuddy"
import Portfolio from "./Projects/Portfolio"
import FunProjects from "./Projects/FunProjects"
import { Route, Routes } from 'react-router-dom'
import PageTransition from './PageTransition'
import { ASCtxProvider } from './context/aboutSwiper'

const MyRoutes = () => {

    return (
        <>
            <ASCtxProvider>
                <NavCtxProvider>
                    <Navbar />
                    <Navpage />
                </NavCtxProvider>
                <PageTransition/>
                <Routes>
                    <Route path='' element={<App />} />
                    <Route path="freelancing" element={<Freelancing />} />
                    <Route path="bankbuddy" element={<BankBuddy />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="fun-projects" element={<FunProjects />} />
                    <Route path='/404' element={<NotFound />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </ASCtxProvider>
        </>
    )
}

export default MyRoutes