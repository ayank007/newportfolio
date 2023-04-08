import {createContext, useContext, useState} from 'react'

const ASCtx = createContext({})

export const ASToggler = () => useContext(ASCtx)

export const ASCtxProvider = (props:any) => {
    const [swiper, setSwiper] = useState()

    const slideChangeTo = (index:number) => {
        console.log('before if stmt');
        
        if (typeof swiper !== 'undefined') {
            if (swiper) {
                swiper.slideTo(index, 700)
            }
        }
    }

    return (
        <ASCtx.Provider value={{slideChangeTo, setSwiper}}>
            {props.children}
        </ASCtx.Provider>
    )
}