import './heading2.scss'

const Heading2 = (props:any) => {
    return(
        <div className="heading2">
            <h2 data-scroll data-scroll-speed="5" data-scroll-direction="horizontal">
                {props.children}
            </h2>
            <p>
                {props.title}
            </p>
        </div>
    )
}

export default Heading2