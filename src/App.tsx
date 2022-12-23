import { useRef } from "react"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


import './App.css'
import Header from './components/Header'

import Navbar from './components/Navbar'
import Work from './components/Work'
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

const App = () => {
    let scrollContainer = useRef(null)

    const options = {
        smooth: true,
    }

    return (
        <LocomotiveScrollProvider 
            options={options} 
            containerRef={scrollContainer} 
            onLocationChange={(scroll:any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}>
            <main id="Main" data-scroll-container ref={scrollContainer}>
                <Navbar />
                <Header />
                <Work />
                <About />
                <Contact />
                <Footer />
            </main>
        </LocomotiveScrollProvider>
    )
}

export default App
