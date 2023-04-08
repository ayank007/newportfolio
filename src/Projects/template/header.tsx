import {useRef, MutableRefObject} from 'react'
import {HashLink} from 'react-router-hash-link'
import './style.scss'
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect'
const Header = ({hero}:any) => {
    const headerImgBlockerRef:MutableRefObject<boolean> = useRef(false)
    const leftBlock:any = useRef()
    const rightBlock:any = useRef()
    const topBlock:any = useRef()
    const bottomBlock:any = useRef()
    
    useIsomorphicLayoutEffect(()=>{
        if (!headerImgBlockerRef.current) {
            headerImgBlockerRef.current = true
            window.onscroll = (e) => {
                let newAngle = window.scrollY / 40
                if (window.innerHeight > window.scrollY) {
                    leftBlock.current.style.setProperty(
                        '--angle',
                        newAngle
                    )
                    rightBlock.current.style.setProperty(
                        '--angle',
                        newAngle
                    )
                    topBlock.current.style.setProperty(
                        '--angle',
                        newAngle
                    )
                    bottomBlock.current.style.setProperty(
                        '--angle',
                        newAngle
                    )
                }
            }
        }
    })

    return (
        <div className="projectsHeader pt-16 h-screen flex1">
            <div className="imgbg">
                <div className="leftBlock block" ref={leftBlock}></div>
                <div className="bottomBlock block" ref={bottomBlock}></div>
                <div className="topBlock block" ref={topBlock}></div>
                <div className="rightBlock block" ref={rightBlock}></div>
                <img src={"./projects/" + hero} 
                className="sticky top-1/2"
                alt="Hero" />
            </div>
            <p className='projectNameHeading'>{hero.split('.')[0]}</p>
            <div className="scrollArrow absolute bottom-14 left-1/2 transform -translate-x-1/2 z-10">
                <HashLink to={'#projectDesc'}>
                    <div className='bg-about text-theme rounded-full w-12 h-12 text-xl flex1'>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                </HashLink>
            </div>
        </div>
    )
}

export default Header