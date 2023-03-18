import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect'
import './cv.scss'

import CV1 from '../../assets/cv/cv1.png'
import CV2 from '../../assets/cv/cv2.png'
import CV3 from '../../assets/cv/cv3.png'
import CV4 from '../../assets/cv/cv4.png'

const CV = ({data}:any) => {
    const track:any = useRef()
    const cvSection:any = useRef()

    const handleOnDown = (e:any) => {
        track.current.dataset.mouseDownAt = e.clientX
        for(const image of track.current.getElementsByClassName("image")) {
            image.classList.remove('no-cursor')
        }
    }
    const handleOnUp = (e:any) => {
        track.current.dataset.mouseDownAt = "0"
        track.current.dataset.prevPercentage = track.current.dataset.percentage
        for(const image of track.current.getElementsByClassName("image")) {
            image.classList.remove('no-cursor')
        }
    }

    const handleOnMove = (e:any) => {
        if(track.current.dataset.mouseDownAt === "0") return
        const mouseDelta = parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2

        const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.current.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100)

        track.current.dataset.percentage = nextPercentage        

        track.current.animate({
            transform: `translateX(${nextPercentage}%)`
        }, { duration: 600, fill: "forwards" })

        for(const image of track.current.getElementsByClassName("image")) {
            image.classList.add('no-cursor')
            image.querySelector('img').animate({
            objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 600, fill: "forwards" })
        }
    }

    const openCV1 = () => {
        window.open('./ayankoley.pdf', "_blank")
    }
    const openCV2 = () => {
        window.open('./google_template_cv.pdf', "_blank")
    }
    const openCV3 = () => {
        window.open('./facebook_template_cv.pdf', "_blank")
    }
    const openCV4 = () => {
        window.open('./amazon_template_cv.pdf', "_blank")
    }


    return (
        <div id="CV" ref={cvSection}>
            <div id="image-track" 
                onMouseUp={handleOnUp}
                // onMouseLeave={handleOnUp}
                // onMouseOut={handleOnUp}
                onMouseMove={handleOnMove}
                onMouseDown={handleOnDown}
                onTouchStart={e=>handleOnDown(e.touches[0])}
                onTouchEnd={e=>handleOnUp(e.touches[0])}
                onTouchMove={e=>handleOnMove(e.touches[0])}
                ref={track} 
                data-mouse-down-at="0" 
                data-prev-percentage="0"
            >
                <div className='image' onClick={openCV1}><img src={CV1} alt="CV1" /></div>
                <div className='image' onClick={openCV2}><img src={CV2} alt="CV2" /></div>
                <div className='image' onClick={openCV3}><img src={CV3} alt="CV3" /></div>
                <div className='image' onClick={openCV4}><img src={CV4} alt="CV4" /></div>
                {/* <img src={CV1} alt="CV1" className='image' onClick={openCV1} />
                <img src={CV2} alt="CV2" className='image' onClick={openCV2}  />
                <img src={CV3} alt="CV3" className='image' onClick={openCV3}  />
                <img src={CV4} alt="CV4" className='image' onClick={openCV4} /> */}
            </div>
            <div className="text">
                <div className='pageNum'>02.</div>
                <h3>
                    {data.title}
                </h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default CV