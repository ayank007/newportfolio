import MagneticElement from '../../utils/magneticElement'
import './style.scss'

const Navbar = () => {

    return (
        <div id="Navbar" data-scroll-sticky data-scroll-target="#Main" className="border-b border-solid border-light flex justify-between w-full">
            <div className="logo border-r border-solid border-light text-2xl font-black flex1 cursor-pointer">
                <MagneticElement velocity={80}>
                    <div className="nav">
                        AYAN
                    </div>
                </MagneticElement>
            </div>
            <div className="navs flex text-xl font-semibold">
                <div className="border-l border-solid border-light">
                    <MagneticElement velocity={30}>
                        <div className='nav'>
                            <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1L22.7555 1" stroke="white" strokeOpacity="0.96" strokeWidth="2"/>
                                <path d="M7.82239 9L32.0001 9" stroke="white" strokeOpacity="0.96" strokeWidth="2"/>
                                <path d="M0 17H22.4" stroke="white" strokeOpacity="0.96" strokeWidth="2"/>
                            </svg>
                        </div>
                    </MagneticElement>
                </div>
                <div className="border-l border-solid border-light w-20 h-full">
                    <MagneticElement velocity={30}>
                        <div className='nav'>_Eng</div>
                    </MagneticElement>
                </div>
                <div className="border-l border-solid border-light">
                    <MagneticElement velocity={30}>
                        <div className="nav">
                            <div className="contactBtn">
                                _get in touch
                            </div>
                        </div>
                    </MagneticElement>
                </div>
            </div>
        </div>
    )
}

export default Navbar
