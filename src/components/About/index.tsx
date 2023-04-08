import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'

import './style.scss'
import Skills from './skills'
import CV from './cv'
import Personal from './personal'

import { ASUser } from '../../context/aboutSwiper'

const About = (props:any) => {
    const {ASRef}:any = ASUser()
    return (
        <section id="About" ref={ASRef}
        className='min-sh h-screen text-black'>
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
            </Swiper>
            <div className="arrows">
                <div className="left"><i className="fa-solid fa-arrow-left-long"></i></div>
                <div className="right"><i className="fa-solid fa-arrow-right-long"></i></div>
            </div>
        </section>
    )
}

export default About
