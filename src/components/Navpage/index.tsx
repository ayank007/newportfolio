import {useRef} from 'react'
import gsap from "gsap"
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect"

import './style.scss'
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud"
import RollingText from '../../utils/RollingText'

import { NavpageToggler } from '../../context/openNavpage'

function Navpage() {
    const { navpageStatus }:any = NavpageToggler()
    const menu:any = useRef()

    useIsomorphicLayoutEffect(()=>{
        let menuTL = gsap.timeline().set(".menu ul", {
            autoAlpha: 1,
        })

        const menuItems = menu.current.querySelectorAll('li')
        menuItems.forEach((item:any) => {
            const imgWrapper = item.querySelector('.imgWrapper')
            const imgWrapperBounds = imgWrapper.getBoundingClientRect()
            const itemBounds = item.getBoundingClientRect()

            const mouseEnter = () => {
                gsap.set(imgWrapper, {
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: 50,
                    opacity: 0,
                    rotation: -15,
                })
                gsap.to(imgWrapper, {
                    opacity: 1,
                    scale: 1,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                })
            }

            const mouseLeave = () => {
                gsap.to(imgWrapper, {
                    opacity: 0,
                    scale: 0.8,
                    xPercent: 25,
                    yPercent: 50,
                    rotation: -15,
                })
            }
            const mouseMove = ({x, y}:any) => {
                let yOffset = itemBounds.top / imgWrapperBounds.height
                yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset)

                gsap.to(imgWrapper, {
                    duration: 1.25,
                    x: Math.abs(x - itemBounds.left) - imgWrapperBounds.width / 1.55,
                    y: Math.abs(y - itemBounds.top) - imgWrapperBounds.height / 2 - yOffset,
                })
            }

            item.addEventListener('mouseenter', mouseEnter)
            item.addEventListener('mouseleave', mouseLeave)
            item.addEventListener('mousemove', mouseMove)
        })
    }, [])

    return (
        <section id='Navpage' className={navpageStatus ? 'active' : ''}>
            <div className="menu w-1/2 flex1" ref={menu}>
                <ul>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                            </div>
                        </div>
                        <a href="#root">
                            <RollingText title="Home" />
                        </a>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" />
                            </div>
                        </div>
                        <a href="#About">
                            <RollingText title="Skills &nbsp; &&nbsp;  Experience" />
                        </a>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                            </div>
                        </div>
                        <a href="#About">
                            <RollingText title="About&nbsp;  Me" />
                        </a>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" />
                            </div>
                        </div>
                        <a href="#About">
                            <RollingText title="Download&nbsp;  CV" />
                        </a>
                    </li>
                    <li>
                        <div className='imgWrapper'>
                            <div className="imgBg">
                                <img src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
                            </div>
                        </div>
                        <a href="#Contact">
                            <RollingText title="Contact" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="skills w-1/2 flex1">
                <div className="filter"></div>
                <TagCloud
                    options={(w: Window & typeof globalThis): TagCloudOptions => ({
                        radius: 200,
                        maxSpeed: "fast",
                    })}
                >
                    {[
                        "SASS",
                        "TypeScript",
                        "React",
                        "Vue",
                        "Vite",
                        "PHP",
                        "Next",
                        "Redux",
                        "JQuery",
                        "C",
                        "REST",
                        "Lighthouse",
                        "Svelte",
                        "GIT",
                        "JavaScript",
                        "Photoshop",
                        "Python",
                        "GSAP",
                        "Figma",
                        "Svelte",
                        "Excel",
                        "SEO",
                        "Tailwind",
                        "XD",
                        "SQL",
                        "Powerpoint",
                        "Flutter",
                    ]}
                </TagCloud>
            </div>
        </section>
    )
}

export default Navpage
