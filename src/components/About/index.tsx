import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import './style.scss'
import Skills from './skills'
import CV from './cv'
import Personal from './personal'

const About = () => {

    return (
        <section id="About" data-scroll-section className='min-sh h-screen text-black'>
            <Swiper
                slidesPerView={1}
                onSlideChange={(e) => console.log('slide change', e.snapIndex)}
            >
                <SwiperSlide>
                    <Skills />
                </SwiperSlide>
                <SwiperSlide>
                    <CV />
                </SwiperSlide>
                <SwiperSlide>
                    <Personal />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default About
