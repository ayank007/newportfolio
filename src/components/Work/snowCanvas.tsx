import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import './snowCanvas.scss'

const SnowCanvas = (props:any) => {    
    const particlesInit = useCallback(async (engine:any) => {
        await loadFull(engine)
    }, [])

    return (
        <div 
        className={props.class1}>
            <Particles
                width="300"
                height="400"
                style={{width: "300px", height: "400px"}}
                id="SnowCanvas"
                init={particlesInit}
                options={{
                    particles: {
                        opacity: {
                            value: {min: 0.3, max: 0.8},
                        },
                        color: {
                            value: [
                                "rgba(255,255,255,1)",
                                "rgba(233,239,250,1)",
                                "rgba(222,241,250,1)",
                                "rgba(178,209,219,1)",
                                "rgba(135,143,145,1)"
                            ]
                        },
                        shape: {
                            options: {
                                images: [
                                    {src: "https://assets.codepen.io/13471/snowflake.png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(1).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(2).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(3).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(4).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(5).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(6).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(7).png"},
                                    {src:"https://assets.codepen.io/13471/snowflake(8).png"},
                                ]
                            },
                            type: 'image',
                        },
                        size: {
                            value: {min: 3, max: 10}
                        },
                        number: {
                            value: 120
                        },
                        move: {
                            direction: 'bottom-right',
                            enable: true,
                            speed: {min: 0.5, max: 3},
                        }
                    }
                }}
            />
            {props.children}
        </div>
            
    )
}

export default SnowCanvas