import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import {useRef} from 'react'

import './style.scss'
import Skills from './skills'
import CV from './cv'
import Personal from './personal'

const About = (props:any) => {
    const prevRef:any = useRef()
    const nextRef:any = useRef()

    const skills = props.skills
    const cv = props.cv
    const about = props.about

    return (
        <section id="About" data-scroll-section className='min-sh h-screen text-black'>
            <Swiper
                slidesPerView={1}
                onSlideChange={(e) => console.log('slide change', e.snapIndex)}
                allowTouchMove= {false}
                modules={[Navigation]}
                loop= {true}
                navigation= {{
                    prevEl: '.arrows .left',
                    nextEl: '.arrows .right',
                }}
            >
                <SwiperSlide>
                    <Skills data={props.skills} />
                </SwiperSlide>
                <SwiperSlide>
                    <CV data={props.cv} />
                </SwiperSlide>
                <SwiperSlide>
                    <Personal data={props.about} />
                </SwiperSlide>
                <div className="arrows">
                    <div className="left" ref={prevRef}><i className="fa-solid fa-arrow-left-long"></i></div>
                    <div className="right" ref={nextRef}><i className="fa-solid fa-arrow-right-long"></i></div>
                </div>
            </Swiper>
        </section>
    )
}

export default About
