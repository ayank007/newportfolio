import {useState} from 'react'

import './App.scss'
import { LangToggler } from "./context/language"
import content from './content/lang.json'

import Header from './components/Header'
import Work from './components/Work'
import About from "./components/About"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

const App = () => {
    const {lang}:any = LangToggler()
    const [data, setData]:any = useState(content)

    return (
        <>
            <Header data={data ? data[lang]['hero'] : ''} />
            <Work data={data ? data[lang]['work'] : ''} />
            <About 
                skills={data ? data[lang]['skills'] : ''} 
                about={data ? data[lang]['about'] : ''} 
                cv={data ? data[lang]['cv'] : ''}
            />
            <Contact data={data ? data[lang]['contact'] : ''} />
            <Footer data={data ? data[lang]['footer'] : ''} />
        </>
    )
}

export default App
