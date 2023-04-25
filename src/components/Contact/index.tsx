import React, { useRef } from "react"
import { useIsomorphicLayoutEffect } from "../../useIsomorphicLayoutEffect"
import Heading2 from "../../utils/heading2"
import gsap from "gsap"
import RoundedText from '../../utils/roundedText'

import './style.scss'

const Contact = ({data}:any) => {
    const form:any = useRef()
    const runOnce:any = useRef(false)
    useIsomorphicLayoutEffect(()=>{
        if (!runOnce.current) {
            runOnce.current = true
            const start = 'M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512'
            const end = 'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512'
            const inpBoxes = form.current.querySelectorAll('.inpBox')

            const tl = gsap.timeline()

            inpBoxes.forEach((inpBox:any) => {
                const inp = inpBox.querySelector('input')
                const line = inpBox.querySelector('.elastic-line')

                inp.addEventListener('focus', ()=>{
                    if (!inp.value) {
                        tl.fromTo(
                            line, {
                                attr: {d: start}
                            }, {
                                attr: {d: end},
                                ease: 'Power2.easeOut',
                                duration: 0.75
                            }
                        )
                        tl.to(line, {attr: {d: start}, ease: 'elastic.out(3, 0.75)'},'<50%')
                    }
                })
            })
        }
    },[])

    const submitContact = async (e:React.FormEvent<HTMLFormElement>) => {
        const form = e.target as HTMLFormElement
        const submitBtn = form.querySelector('[type=submit]') as HTMLElement
        submitBtn?.classList.add('no-cursor1')
        submitBtn.innerText = 'Submitting!!'
        e.preventDefault()
        
        const nameInp = form.querySelector('[name=name]') as HTMLInputElement
        const contactInp = form.querySelector('[name=contact]') as HTMLInputElement
        const reasonInps = form.querySelectorAll('[name="reasonForContact"]:checked') as NodeListOf<HTMLInputElement>
        const msgInp = form.querySelector('[name=message]') as HTMLTextAreaElement

        const reasonInpValues = []
        for (var i = 0; i < reasonInps.length; i++) {
            reasonInpValues.push(reasonInps[i].value)
        }

        const res = await fetch('https://ayankoley-bb6cc-default-rtdb.europe-west1.firebasedatabase.app/contactUs.json', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: nameInp.value,
                contact: contactInp.value,
                reason: reasonInpValues.join(', ').toString(),
                message: msgInp.value,
            })
        })

        if (res) {
            alert("Your submission is successfully stored")
        } else {
            alert("There is some problem saving the data, please continue after some time.")
        }

        submitBtn?.classList.remove('no-cursor1')
        submitBtn.innerText = 'Submit'
    }

    return (
        <section data-scroll-section id="Contact" className="mainContainer px-base min-sh">
            <br /><br />
            <Heading2 title={data.title}>{data.title2}</Heading2>
            <br /><br />
            <div className="flex flex-wrap">
                <div className="left flex items-center pb-40">
                    <div className="stepText" style={{visibility: "inherit", opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                        <div className="sliding-text second-screen__sliding-text sliding-text--second-screen second-screen__sliding-text--second active">
                            <div className="sliding-text__line">
                                <span>&nbsp;</span>
                                <span>
                                    {data.heading2[0]}&nbsp;<i className="fa-solid fa-paper-plane"></i>
                                </span>
                            </div>
                            <div className="sliding-text__line">
                                <span>
                                {data.heading2[0]}&nbsp;<i className="fa-solid fa-paper-plane"></i>
                                </span>
                                <span>{data.heading2[1]}</span>
                            </div>
                            <div className="sliding-text__line">
                                <span>{data.heading2[1]}</span>
                                <span>&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form autoComplete="off" ref={form} onSubmit={submitContact}>
                        <h2 className="font-bold heading">
                            {data.heading}
                        </h2>
                        <br />
                        <div className="inpBg">
                            <label className="inpBox">
                                <p>{data.name}</p>
                                <input type="text" required name="name" placeholder="John Doe" />
                                <svg className="line-svg" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" strokeWidth="1"/>
                                </svg>
                            </label>
                            <label className="inpBox">
                                <p>{data.contact}</p>
                                <input type="text" required name="contact" placeholder="john.doe@gmail.com" />
                                <svg className="line-svg" width="300" height="2" viewBox="0 0 300 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="elastic-line" d="M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512" stroke="#D1D4DA" strokeWidth="1"/>
                                </svg>
                            </label>
                        </div>
                        <p className="mt-8">{data.reason.title}</p>
                        <div className="reasons flex flex-col gap-y-2 mt-3 mb-7">
                            {data.reason.option.map((option:any,key:number)=>{
                                return (
                                    <div key={key}>
                                        <label>
                                            <input className="inp-cbx" name="reasonForContact" value={option} type="checkbox" />
                                            <div className="cbx">
                                                <span>
                                                    <svg width="12px" height="10px">
                                                    <use xlinkHref="#check"></use>
                                                    </svg>
                                                </span>
                                                <span className="title">{option}</span>
                                            </div>
                                        </label>
                                    </div>
                                )
                            })}
                            <svg className="inline-svg">
                                <symbol id="check" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </symbol>
                            </svg>
                        </div>
                        <label>
                            <p>{data.desc}</p>
                            <textarea name="message" required placeholder="Hi, how are you?"></textarea>
                        </label>
                        <br /><br />
                        <button className="submit px-10 py-2 rounded Link submitContactBtn" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <p className="text-center ending font-bold mt-16 heading">
                {data.ending}
            </p>
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
