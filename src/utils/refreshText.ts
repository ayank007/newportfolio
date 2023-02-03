const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const RefreshText = (html:HTMLElement) => {
    const ogWord = html.innerText
    html.addEventListener('mouseover', () => {
        let intervalCount = 0
        const refreshTextInterval = setInterval(()=>{
            if (intervalCount >= 10) {
                clearInterval(refreshTextInterval)
            }
            intervalCount += 1 / 3
            html.innerText = html.innerText.split('')
                .map((letter, index)=>{
                    if (intervalCount <= index) {
                        return alphabet[Math.floor(Math.random() * 26)]
                    } else {
                        return ogWord[index]
                    }
                })
                .join('')
        }, 30)
    })
}

export default RefreshText