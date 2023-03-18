import './personal.scss'

const Personal = ({data}:any) => {
    return (
        <div id="Personal">
            <div className="text">
                <div className='pageNum'>03.</div>
                <h3>
                    {data.title}
                </h3>
                <p>{data.desc}</p>
            </div>
        </div>
    )
}

export default Personal