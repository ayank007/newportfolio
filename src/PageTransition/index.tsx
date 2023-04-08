import BouncingDot from "../utils/Loading/bouncingDot"
import {useRef} from 'react'
import './style.scss'
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect"
import { AnimToggler } from "../context/pageTransition"

const PageTransition = () => {
    const {animStatus, toggleAnimStatus}:any = AnimToggler()
    const page1:any = useRef()
    const page3:any = useRef()
    useIsomorphicLayoutEffect(()=>{
        if (animStatus) {
            console.log('animating')
            
            page1.current.classList?.add('active')
            setTimeout(()=>{
                page3.current.classList?.add('active')
            },200)
            setTimeout(()=>{
                page1.current.classList?.remove('active')
                page3.current.classList?.add('active2')
            },1000)
            setTimeout(()=>{
                page3.current.classList?.remove('active2')
                page3.current.classList?.remove('active')
                toggleAnimStatus()
            },2200)
        }
    }, [animStatus])
    
    return (
        <div className="transition1">
            <div className="page1" ref={page1}></div>
            <div className="page2"></div>
            <div className="page3" ref={page3}>
                <div className="row1 row"></div>
                <div className="row2 row"></div>
                <div className="row3 row">
                    <div className="pageTransitionTxt">
                        <BouncingDot title="Ayan is thinking" />
                    </div>
                </div>
                <div className="row4 row"></div>
                <div className="row5 row"></div>
            </div>
        </div>
    )
}

export default PageTransition