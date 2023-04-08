import {useRef, MutableRefObject} from 'react' 

import Heading2 from "../../utils/heading2"

import ArrowCanvas from './arrowCanvas'
import BoxCanvas from './boxCanvas'
import SnowCanvas from './snowCanvas'
import SquareBubbleCanvas from './squareBubbleCanvas'

import SS_portfolio from '../../assets/projects/portfolio.png'
import project4 from '../../assets/projects/project4.png'
import front from '../../assets/projects/front1.png'
import bankbuddy from '../../assets/projects/bankbuddy2.png'
import mikasa from '../../assets/projects/mikasa.png'

import gemBid from '../../assets/projects/gemBid.png'
import wordHighlighter from '../../assets/projects/wordHighlighter.png'
import mapScrapper from '../../assets/projects/mapScrapper.jpg'
import gem48 from '../../assets/projects/gem48.png'
import ghost from '../../assets/projects/ghost.png'

import './style.scss'

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect"
import Link1 from '../../utils/CustomLinks/Link1'
import {HashLink} from 'react-router-hash-link'

const Work = ({data}:any) => {
    const wormHoleRef:MutableRefObject<boolean> = useRef(false)
    
    useIsomorphicLayoutEffect(()=>{
        if (!wormHoleRef.current) {
            wormHoleRef.current = true
            gsap.registerPlugin(ScrollTrigger)
            let wormHoleTL = gsap.timeline({
                scrollTrigger: {
                    trigger: '.spreader',
                    start: 'top center',
                    end: 'top top',
                    markers: true,
                    pin: '.spreaderBg',
                    scrub: 1,
                    toggleActions: 'play pause reverse pause',
                }
            })
            wormHoleTL.from('.spreader', {
                scale:1,
                ease: 'linear',
                duration: 0,
            }).to('.spreader', {
                scale:100,
                ease: 'linear',
                duration: 5,
            })

            let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".projectBg", "skewY", "deg"), // fast
            clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

            ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300)
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew
                gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)})
                }
            }
            })
            gsap.set(".projectBg", {transformOrigin: "right center", force3D: true})
        }
    }, [])

    const removeSkeleton = (img: HTMLImageElement) => {
        // console.log(img.getAttribute('alt') + " is loaded");
        img.parentElement?.classList.remove('skeleton')
    }

    return (
        <section id="Work" data-scroll-section>
            <br /><br />
            <Heading2 title={data.title}>{data.title2}</Heading2>
            <br /><br /><br /><br />
            <div className="projects">
                <div className="projectBg">
                    <Link1 to={"portfolio"}>
                    <div className="project1 project Link">
                        <ArrowCanvas class1="view flex1">
                            <div className="imgbg absolute w-4/5 rounded skeleton overflow-hidden">
                                <img src={SS_portfolio} 
                                    loading="lazy" 
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} 
                                    alt="Online Interactive Resume"
                                />
                            </div>
                        </ArrowCanvas>
                        <div className="texts">
                            <h3>{data.project1.title}</h3>
                            <p>{data.project1.desc}</p>
                        </div>
                    </div>
                    </Link1>
                </div>
                <div className="projectBg">
                    <Link1 to={"freelancing"}>
                    <div className="project2 project Link">
                        <BoxCanvas class1="view">
                            <div className="imgbg absolute rounded skeleton overflow-hidden"
                            style={{width: '280px', top: '15px', right: '-70px'}} >
                                <img src={front} 
                                    loading="lazy" 
                                    alt="Freelancing Project Fitmylan" 
                                    className="w-full h-full" 
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} 
                                />
                            </div>
                            <div 
                            className="imgbg absolute rounded skeleton overflow-hidden"
                            style={{width: '240px', bottom:'10px', left: '-35px'}}>
                                <img 
                                    src={project4} 
                                    loading="lazy" 
                                    className="w-full h-full" 
                                    alt="Freelancing Project Teacher"
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} 
                                />
                            </div>
                        </BoxCanvas>
                        <div className="texts">
                            <h3>{data.project2.title}</h3>
                            <p>{data.project2.desc}</p>
                        </div>
                    </div>
                    </Link1>
                </div>
                <div className="projectBg">
                    <Link1 to={"fun-projects"}>
                    <div className="project3 project Link">
                        <SnowCanvas class1="view">
                            <img src={gem48} className="w-8 absolute top-60 left-20 z-10" alt="" />
                            <img src={ghost} className="w-10 absolute top-3 z-10 right-5" alt="" />
                            <img src={wordHighlighter} className="absolute w-16 top-44 z-10 right-6" alt="wordHighlighter" />
                            <div 
                            className="imgbg absolute bottom-4 rounded-lg -left-20 skeleton overflow-hidden"
                            style={{width: "350px"}}>
                                <img 
                                    loading='lazy' 
                                    src={gemBid} 
                                    className="w-full h-full" 
                                    alt="Gem Biding extension"
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} 
                                />
                            </div>
                            <div 
                            className="imgbg absolute top-8 left-10 rounded-lg skeleton overflow-hidden">
                                <img 
                                    loading='lazy' 
                                    src={mapScrapper}
                                    alt="Details scrapper" 
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)}
                                />
                            </div>
                        </SnowCanvas>
                        <div className="texts">
                            <h3>{data.project3.title}</h3>
                            <p>
                            {data.project3.desc}
                            </p>
                        </div>
                    </div>
                    </Link1>
                </div>
                <div className="projectBg">
                    <Link1 to={"bankbuddy"}>
                    <div className="project4 project Link">
                        <SquareBubbleCanvas class1="view">
                            <div 
                            className="imgbg absolute rounded skeleton overflow-hidden"
                            style={{left:'-20px', bottom: '-15px', width: '180px'}}>
                                <img 
                                    loading='lazy'
                                    src={mikasa}
                                    alt="mikasa"
                                    className="w-full h-full" 
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} 
                                />
                            </div>
                            <div 
                            className="imgbg absolute rounded skeleton overflow-hidden"
                            style={{width: '300px', bottom: '-2px', right: '-50px'}}>
                                <img 
                                    src={bankbuddy} 
                                    loading='lazy' 
                                    className="w-full h-full" 
                                    alt="bankbuddy"
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} 
                                />
                            </div>
                        </SquareBubbleCanvas>
                        <div className="texts">
                            <h3>{data.project4.title}</h3>
                            <p>
                            {data.project4.desc}
                            </p>
                        </div>
                    </div>
                    </Link1>
                </div>
            </div>

            <br /><br />
            <br /><br />
            <Heading2 title={data.ending}>{data.ending2}</Heading2>
            <br /><br />
            <br /><br />
            <div className="flex1 spreaderBg">
                <div className="spreader"></div>
                <HashLink to={"#About"}>
                <div className="wormHoleBtn cursor-pointer">
                    <div className="wormHoleBtnText">
                        <p>Full Sail</p>
                    </div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1024.000000pt" height="490.000000pt" viewBox="0 0 1024.000000 490.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,490.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M6403 4882 c-99 -35 -163 -94 -205 -189 -17 -38 -20 -61 -16 -132 4 -75 25 -156 166 -629 89 -298 162 -544 162 -547 0 -3 -1465 -5 -3255 -5 l-3255 0 0 -925 0 -925 3255 0 c1790 0 3255 -4 3255 -8 0 -5 -73 -249 -162 -543 l-161 -534 -1 -110 c-1 -94 2 -116 21 -150 28 -54 112 -131 171 -158 67 -31 197 -31 265 0 42 20 322 208 1622 1088 182 123 407 275 500 339 996 673 1434 969 1452 984 22 17 10 25 -1000 707 -562 380 -1357 917 -1767 1194 -410 277 -767 515 -795 529 -67 34 -178 40 -252 14z"></path></g>
                    </svg>
                </div>
                </HashLink>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    )
}

export default Work
