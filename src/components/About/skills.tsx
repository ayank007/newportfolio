import './skills.scss'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { useIsomorphicLayoutEffect } from '../../useIsomorphicLayoutEffect'
import { useRef } from 'react'
import gsap from 'gsap'

const Skills = ({data}:any) => {
    const content:any = useRef()
    const overScrollOptions:any = {
        enable: true,
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 150,
    }
    const options:any = {
        damping: 0.1,
        thumbMinSize: 20,
        alwaysShowTracks: true,
        plugins: {
            overscroll: {...overScrollOptions}
        },
    }
    useIsomorphicLayoutEffect(()=>{
        Scrollbar.use(OverscrollPlugin)
        const MySmoothScrollbar:any = Scrollbar.init(content.current, options)
    }, [])
    return (
        <div id="SkillsAndExperience">
            <div className='content' ref={content}>
                {data.experience.map((exp:any, key:number)=>{
                    return(<div key={key}>
                        <h6>{key}. {exp.title}</h6>
                        <p>{exp.subtitle}</p>
                        <div className="tags">
                            {exp.skills.map((skill:string, skillsKey:number)=>{
                                return (<span key={skillsKey}>{skill}</span>)
                            })}
                        </div>
                        <br />
                        <p>{data.desc} ~</p>
                        <ul>
                            {exp.role.map((role:string, roleKey:number)=>{
                                return(
                                    <li key={roleKey}>{role}</li>
                                )
                            })}
                        </ul>
                        <br /><br /><br /><br />
                    </div>)
                }).reverse()}
            </div>
            <div className="text">
                <div className='pageNum'>01.</div>
                <h3 className='w-80'>
                    {data.title}
                </h3>
            </div>
        </div>
    )
}

export default Skills