import Heading2 from "../../utils/heading2"

import ArrowCanvas from './arrowCanvas'
import BoxCanvas from './boxCanvas'
import SnowCanvas from './snowCanvas'
import SquareBubbleCanvas from './squareBubbleCanvas'

import SS_portfolio from '../../assets/projects/portfolio.png'
import project4 from '../../assets/projects/project4.png'
import front from '../../assets/projects/front.png'
import bankbuddy from '../../assets/projects/bankbuddy1.png'
import mikasa from '../../assets/projects/mikasa.png'

import './style.scss'


const Work = () => {

    return (
        <section id="Work" data-scroll-section className="mainContainer px-base min-sh">
            <br /><br />
            <Heading2 title='Projects'>Some of my works</Heading2>
            <br /><br /><br /><br />
            <div className="projects">
                <div className="projectBg">
                    <div className="project1 project">
                        <ArrowCanvas class1="view flex1">
                            <img src={SS_portfolio} alt="Online Interactive Resume" className="w-4/5 rounded" />
                        </ArrowCanvas>
                        <div className="texts">
                            <h3>Resume & Portfolio</h3>
                            <p>Figma, React + GSAP ~ fav combination</p>
                        </div>
                    </div>
                </div>
                <div className="projectBg">
                    <div className="project2 project">
                        <BoxCanvas class1="view">
                            <img src={front} alt="Freelancing Project Fitmylan" className="absolute rounded" style={{width: '280px', top: '15px', right: '-70px'}} />
                            <img src={project4} alt="Freelancing Project Teacher" className="absolute rounded" style={{width: '240px', bottom:'10px', left: '-35px'}} />
                        </BoxCanvas>
                        <div className="texts">
                            <h3>Some Freelance works</h3>
                            <p>as a Fontend Developer</p>
                        </div>
                    </div>
                </div>
                <div className="projectBg">
                    <div className="project3 project">
                        <SnowCanvas class1="view" />
                        <div className="texts">
                            <h3>few fun projects</h3>
                            <p>
                                Which are very useful
                            </p>
                        </div>
                    </div>
                </div>
                <div className="projectBg">
                    <div className="project4 project">
                        <SquareBubbleCanvas class1="view">
                            <img src={mikasa} alt="mikasa" className="absolute" style={{left:'-20px', bottom: '-15px', width: '180px'}} />
                            <img src={bankbuddy} alt="bankbuddy" className="absolute" style={{width: '300px', bottom: '-2px', right: '-50px'}} />
                        </SquareBubbleCanvas>
                        <div className="texts">
                            <h3>bankbuddy</h3>
                            <p>
                                College final project ~ Banking help as chatbot/voicebot [JS + ML]
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />
            <br /><br />
            <Heading2 title='warm hole'>Voyage to next section</Heading2>
            <br />
            <div className="w-full flex1">
            <div className="warmHoleBtn">
                    <div className="warmHoleBtnText">
                        <p>Full Sail</p>
                    </div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1024.000000pt" height="490.000000pt" viewBox="0 0 1024.000000 490.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,490.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M6403 4882 c-99 -35 -163 -94 -205 -189 -17 -38 -20 -61 -16 -132 4 -75 25 -156 166 -629 89 -298 162 -544 162 -547 0 -3 -1465 -5 -3255 -5 l-3255 0 0 -925 0 -925 3255 0 c1790 0 3255 -4 3255 -8 0 -5 -73 -249 -162 -543 l-161 -534 -1 -110 c-1 -94 2 -116 21 -150 28 -54 112 -131 171 -158 67 -31 197 -31 265 0 42 20 322 208 1622 1088 182 123 407 275 500 339 996 673 1434 969 1452 984 22 17 10 25 -1000 707 -562 380 -1357 917 -1767 1194 -410 277 -767 515 -795 529 -67 34 -178 40 -252 14z"></path></g>
                    </svg>
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </section>
    )
}

export default Work
