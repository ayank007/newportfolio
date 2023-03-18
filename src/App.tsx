import {useEffect, useState} from 'react'
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {NavCtxProvider} from './context/openNavpage'
import { LangToggler } from "./context/language"

import './App.scss'
import content from './content/lang.json'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Work from './components/Work'
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Navpage from "./components/Navpage"
import Cursor from './utils/cursor'

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
    
    const {toggleLang, lang}:any = LangToggler()

    useIsomorphicLayoutEffect(()=>{
        // Scrollbar.use(OverscrollPlugin)
        // const MySmoothScrollbar = Scrollbar.init(document.body, options)
        // gsap.registerPlugin(ScrollTrigger)
        
        // ScrollTrigger.scrollerProxy(".MainBody", {
        //     scrollTop(value) {
        //         if (arguments.length) {
        //             MySmoothScrollbar.scrollTop = value
        //         }
        //         return MySmoothScrollbar.scrollTop
        //     },
        // })

        const saved = localStorage.getItem('lang')
        if (saved != null) {
            console.log('fetching language from localstorage')
            
            const initial = JSON.parse(saved)            
            toggleLang(initial)
        }
        
    }, [])

    const [data, setData]:any = useState(content)

    return (
        <div id='MainBody' className={'lang-' + lang}>
            <NavCtxProvider>
                <Navbar />
                <Navpage />
            </NavCtxProvider>
            <Header data={data ? data[lang]['hero'] : ''} />
            <Work data={data ? data[lang]['work'] : ''} />
            <About 
                skills={data ? data[lang]['skills'] : ''} 
                about={data ? data[lang]['about'] : ''} 
                cv={data ? data[lang]['cv'] : ''}
            />
            <Contact data={data ? data[lang]['contact'] : ''} />
            <Footer data={data ? data[lang]['footer'] : ''} />
        </div>
    )
}

export default App
