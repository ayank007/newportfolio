import {useRef} from 'react'
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect"

import SplitText from './splitText'

import './roundedText.scss'

const RoundedText = (props:any) => {
    const titleRef:any = useRef()
    const rtRef:any = useRef()

    const brand = props.brand
    const roundedTextCon = `${brand} • ${brand} • ${brand} • ${brand} • `
    const deg = 360 / roundedTextCon.length

    useIsomorphicLayoutEffect(()=>{
        titleRef.current.querySelectorAll('.letter').forEach((letter:HTMLElement, index:number)=>{
            letter.style.transform = `rotate(${deg * index}deg)`
        })
    }, [])

    let interval:any
    const startRotating = () => {
        clearInterval(interval)
        interval = setInterval(() => {
            let newAngle = +(getComputedStyle(titleRef.current).getPropertyValue('--angle')) + 5
            
            titleRef.current.style.setProperty(
            '--angle',
            newAngle
            )
        }, 100)
    }
    const stopRotating = () => {
        clearInterval(interval)
    }

    return (
        <div className={"roundedText " + brand} ref={rtRef} onMouseEnter={startRotating} onMouseLeave={stopRotating}>
            <a rel="noopener noreferrer" href={props.link} target="_blank">
                <div ref={titleRef} className='title'>
                    <SplitText>
                        {roundedTextCon}
                    </SplitText>
                </div>
                <div className="icon">    
                    <i className={'fa-brands fa-' + brand}></i>
                </div>
            </a>
        </div>
    )    
}

export default RoundedText