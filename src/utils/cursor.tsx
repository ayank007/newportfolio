import './cursor.scss'
import gsap from "gsap"
import {useRef} from 'react'
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect'

const Cursor = () => {
    const cursorFollower:any = useRef()
    
    useIsomorphicLayoutEffect(()=>{
        if (cursorFollower.current) {
            const xTo = gsap.quickTo(cursorFollower.current, "x", {duration: 1.5, ease: "elastic.out(1.5, 0.5)"})
            const yTo = gsap.quickTo(cursorFollower.current, "y", {duration: 1.5, ease: "elastic.out(1.5, 0.5)"})
            window.onmousemove = function(e:MouseEvent) {        
                xTo(e.clientX)
                yTo(e.clientY)

                const target = e.target as Element
                if (target.classList.contains('Link')) {
                    gsap.to(cursorFollower.current, 0.3, {scale: 5})
                } else {
                    gsap.to(cursorFollower.current, 0.3, {scale: 1})
                }
            }
            gsap.set(cursorFollower.current, {xPercent: -50, yPercent: -50, duration: 1})
        }
    }, [cursorFollower.current])
    return (
        <div className="cursorFollower" ref={cursorFollower}></div>
    )
}

export default Cursor