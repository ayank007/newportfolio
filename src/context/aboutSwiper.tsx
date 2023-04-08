import {createContext, useContext, useRef} from 'react'

const ASCtx = createContext({})

export const ASUser = () => useContext(ASCtx)

export const ASCtxProvider = (props:any) => {
    const ASRef = useRef()
    return (
        <ASCtx.Provider value={ASRef}>
            {props.children}
        </ASCtx.Provider>
    )
}