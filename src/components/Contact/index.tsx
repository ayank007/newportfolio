import {useRef} from 'react'
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect"
import Heading2 from "../../utils/heading2"
import RefreshText from '../../utils/refreshText'
import RoundedText from '../../utils/roundedText'
import SplitText from "../../utils/splitText"
import './style.scss'

const Contact = () => {
    const hello:any = useRef(null)

    useIsomorphicLayoutEffect(()=>{
        if (hello.current!=null) {
            hello.current.addEventListener('mouseover', RefreshText(hello.current))
        }
        return () => hello.current.removeEventListener('mouseover', RefreshText(hello.current))
    }, [])

    return (
        <section data-scroll-section id="Contact" className="mainContainer px-base min-sh">
            <br /><br />
            <Heading2 title='Contact'>Let's get in touch</Heading2>
            <br /><br />
            <div className="flex flex-wrap">
                <div className="left flex items-center pb-40">
                    <div className="stepText" style={{visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                        <div className="sliding-text second-screen__sliding-text sliding-text--second-screen second-screen__sliding-text--second active">
                            <div className="sliding-text__line">
                                <span>&nbsp;</span>
                                <span>
                                    Let's Proceed&nbsp;<i className="fa-solid fa-paper-plane"></i>
                                </span>
                            </div>
                            <div className="sliding-text__line">
                                <span>
                                    Let's Proceed&nbsp;<i className="fa-solid fa-paper-plane"></i>
                                </span>
                                <span>to the next step</span>
                            </div>
                            <div className="sliding-text__line">
                                <span>to the next step</span>
                                <span>&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form action="">
                        <h2 className="text-2xl font-bold heading">
                            Tell us a little about your project and we'll be in touch
                        </h2>
                        <br />
                        <div className="inpBg">
                            <label>
                                <p>Your Name</p>
                                <input type="text" name="name" placeholder="John Doe" />
                            </label>
                            <label>
                                <p>Contact Info</p>
                                <input type="text" name="contact" placeholder="john.doe@gmail.com" />
                            </label>
                        </div>
                        <br />
                        <p>How can I help you?</p>
                        <div className="reasons flex flex-col gap-y-2 my-3">
                            <input className="inp-cbx" id="contactForHire" type="checkbox"/>
                            <label className="cbx" htmlFor="contactForHire">
                                <span>
                                    <svg width="12px" height="10px">
                                    <use xlinkHref="#check"></use>
                                    </svg>
                                </span>
                                <span className="title">Hire me</span>
                            </label>
                            <input className="inp-cbx" id="contactForTips" type="checkbox"/>
                            <label className="cbx" htmlFor="contactForTips">
                                <span>
                                    <svg width="12px" height="10px">
                                    <use xlinkHref="#check"></use>
                                    </svg>
                                </span>
                                <span className="title">Some tips / Report a bug</span>
                            </label>
                            <input className="inp-cbx" id="contactForChat" type="checkbox"/>
                            <label className="cbx" htmlFor="contactForChat">
                                <span>
                                    <svg width="12px" height="10px">
                                    <use xlinkHref="#check"></use>
                                    </svg>
                                </span>
                                <span className="title">Just a chat</span>
                            </label>
                            <input className="inp-cbx" id="contactForOthers" type="checkbox"/>
                            <label className="cbx" htmlFor="contactForOthers">
                                <span>
                                    <svg width="12px" height="10px">
                                    <use xlinkHref="#check"></use>
                                    </svg>
                                </span>
                                <span className="title">Others</span>
                            </label>
                            <svg className="inline-svg">
                                <symbol id="check" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </symbol>
                            </svg>
                        </div>
                        <label>
                            <p>Any Messages?</p>
                            <textarea name="message" placeholder="Hi, how are you?"></textarea>
                        </label>
                    </form>
                </div>
            </div>
            <p className="text-center font-bold text-xl mt-16 heading">
                Don't like forms? Drop a quick HI @ my socials ~
            </p>
            <div ref={hello}>Hello</div>
            <div className="flex gap-x-6 justify-center pt-7 roundedTexts">
                <RoundedText brand='linkedin' link="https://www.linkedin.com/in/ayan-koley-3370a9190/" />
                <RoundedText brand='discord' link="https://discord.com/users/925418443371593738" />
                <RoundedText brand='instagram' link="https://www.instagram.com/_ayank007_/" />
                <RoundedText brand='github' link="https://github.com/ayank007" />
            </div>
            <br /><br />
        </section>
    )
}

export default Contact
