import { Link, useLocation, useNavigate } from "react-router-dom"
import { AnimToggler } from "../../context/pageTransition"
import { HashLink } from 'react-router-hash-link'
import { NavpageToggler } from "../../context/openNavpage"

import { ASUser } from "../../context/aboutSwiper"

const Link2 = (props:any) => {
    const {ASRef}:any = ASUser()
    const { toggleNavpage, navpageStatus }:any = NavpageToggler()
    const location = useLocation()
    const navigate = useNavigate()
    const { toggleAnimStatus }:any = AnimToggler()
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        
        toggleAnimStatus()

        setTimeout(() => {
            navigate("/")
            if (navpageStatus) {
                toggleNavpage()
            }
        }, 1000)
        setTimeout(()=>{
            if (props.to.includes('Contact')) {
                window.scrollTo(0, (document.body.scrollHeight - (window.innerHeight * 3)))
            } else if (['skills', 'about', 'cv'].some(section=>props.to.toLowerCase().includes(section))) {
                window.scrollTo(0, (document.body.scrollHeight - (window.innerHeight * 4.7)))
                
                // if (props.to.toLowerCase().includes('about')) {
                //     ASRef?.current.children[0].swiper.slideTo(3)
                // }
                // else if (props.to.toLowerCase().includes('cv')) {
                //     ASRef?.current.children[0].swiper.slideTo(2)
                // }
                // else if (props.to.toLowerCase().includes('skills')) {
                //     ASRef?.current.children[0].swiper.slideTo(1)
                // }
            } else {
                window.scrollTo(0, 0)
            }
        }, 1200)
    }

    const handleClick2 = () => {
        if (navpageStatus) {
            toggleNavpage()
            const swiperInstance:any = document.querySelector('#About')?.children[0]
            if (props.to.toLowerCase().includes('about')) {
                console.log('going to about me');
                
                swiperInstance.swiper.slideTo(3)
            }
            else if (props.to.toLowerCase().includes('cv')) {
                console.log('going to cv');
                
                swiperInstance.swiper.slideTo(2)
            }
            else if (props.to.toLowerCase().includes('skills')) {
                console.log('going to skills');
                
                swiperInstance.swiper.slideTo(1)
            }
        }
    }

    if (location.pathname != '/') {
        return <Link to={props.to} onClick={handleClick}>
            {props.children}
        </Link>
    }
    return <HashLink to={props.to} onClick={handleClick2}>{props.children}</HashLink>
}

export default Link2