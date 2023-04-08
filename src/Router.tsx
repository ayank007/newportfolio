import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect"

import { HashRouter, Routes } from 'react-router-dom'
import { LangToggler } from "./context/language"
import MyRoutes from "./Routes"
import { AnimCtxProvider } from './context/pageTransition'

const MyRouter = () => {
    const {toggleLang, lang}:any = LangToggler()
    useIsomorphicLayoutEffect(()=>{
        const saved = localStorage.getItem('lang')
        if (saved != null) {
            console.log('fetching language from localstorage')
            
            const initial = JSON.parse(saved)            
            toggleLang(initial)
        }
        
    }, [])
    return(
        <div id='MainBody' className={'lang-' + lang}>
            <HashRouter>
                <AnimCtxProvider>
                    <MyRoutes />
                </AnimCtxProvider>
            </HashRouter>
        </div>
    )
}

export default MyRouter