import './style.scss'
const BouncingDot = ({title}:any) => {
    return (
        <div className="loadingText">
            <p>{title}</p>
            <div className="dot">
                <div className="dotInner"></div>
            </div>
        </div>
    )
}
export default BouncingDot