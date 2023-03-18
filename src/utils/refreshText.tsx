const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const Refresh = (wrapper:any) => {
    console.log('mouseEnter');
    
    const html = wrapper.querySelector('.refreshText')
    const ogWord = html.innerText
    wrapper.classList.add('no-cursor')
    let intervalCount = 0
    const refreshTextInterval = setInterval(()=>{
        if (intervalCount >= ogWord.length) {
            clearInterval(refreshTextInterval)
            wrapper.classList.remove('no-cursor')
        }
        intervalCount += 1 / 3
        html.innerText = html.innerText.split('')
            .map((letter:any, index:any)=>{
                if (intervalCount <= index) {
                    return alphabet[Math.floor(Math.random() * 26)]
                } else {
                    return ogWord[index]
                }
            })
            .join('')
    }, 30)
}

const RefreshText = (props:any) => {
    return(
        <div onMouseEnter={(e)=>Refresh(e.target)}>
            <p className="refreshText pointer-events-none">{props.title}</p>
        </div>
    )
}

export default RefreshText