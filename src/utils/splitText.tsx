const SplitText = (props:any) => {
    return (
        props.children.split('').map((letter:String, key:number) => {
            return (
                <span key={key} className='letter'>
                    {letter}
                </span>
            )
        })
    )
}

export default SplitText