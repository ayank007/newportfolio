import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

import './App.css'
import Header from './components/Header'

import Navbar from './components/Navbar'
import Work from './components/Work'
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

const overScrollOptions:any = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverscroll: 150,
}
const options:any = {
    damping: 0.1,
    thumbMinSize: 20,
    plugins: {
        overscroll: {...overScrollOptions}
    },
}

const App = () => {
    
    useIsomorphicLayoutEffect(()=>{
        Scrollbar.use(OverscrollPlugin)
        Scrollbar.init(document.body, options)
    })

    return (
        <>
            <Navbar />
            <Header />
            <Work />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default App
