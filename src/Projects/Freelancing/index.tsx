import Header from "../template/header"

const Freelancing = () => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.classList.remove('skeleton')
    }
    return (
        <section className="Section">
            <Header hero="freelancing.png" />
            <div id="projectDesc" className="!block bg-white !pt-10">
                <div className="flex flex-wrap justify-around items-center gap-y-8 floatedImages">
                <img src="./projects/godrej1.jpg" alt=""
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)}  />
                <div>
                <img src="https://lh3.googleusercontent.com/fOlmogM7U9QgOT3_fVUgCJiCRV3AQvcCey9PNyJuqJLMR1ivv_hJsNPKCaNa7nl53lNZnjH5panJzwI-9RhLK17zMwx_Y1qqsS5tcLSB4GdCxlkj6VpFumeWF7mm90YQ9VKqjcSREg=w2400" alt=""
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                <img src="https://lh3.googleusercontent.com/woOgPG32ZoZbXdLaaqHWIP_YjyWm_9k4rQ99BIxFX1Ffpx85ddEkabhLepoiDBHg_V3AeyxQgP5Lu3h2TzVSRNKmxD37jAastBTPw8g4eZ05GQs7aaDw_PXtYqnjdT8wnS1RXSfXDw=w2400" alt=""
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                </div>
                <img src="https://lh3.googleusercontent.com/0pP6mXatkxnGRIW2-QUoIjq3EjE1GUQX0_g4TiGCMUO50miKXq9EptyLuDM77qd8aJP0EuiqwZ-Ifuw4ydtuxuZWl9cZMJf21k0ca258BUREzhZh73Vv765SzldRJWx1xIpgGk1Q_A=w2400" alt=""
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                <img src="./projects/freelancing.png" alt="" />
                <div>
                <img src="./projects/mc1.png" alt="" />
                <img src="https://lh3.googleusercontent.com/KMCkoqrF5x698agRxqdKu6Im2hVIdyWhEqaLANw7if5R-IX-v3CBcpFUHwLUHP-kIIfQWwIMr_Blg54lzi5-4dS1KwGt2IHsf4cYauvfeMKYzL94StKNcpGs92iyHNgnmci7Xz27zw=w2400" alt=""
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                </div>
                <img src="https://lh3.googleusercontent.com/Q4sXTYEEj6J8uDipp35iGuSD8tKnboXfF0fSREEVBukjlTvU945njk_kImT7HmKinVR97ZrAX1bdxIZf98rNhiLJ8wCzax9FJaxtYNtA5xYlxITHMHPgQr8CnF_KiDbuvPRUQOTBtg=w2400" alt=""
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                <img src="./projects/mc4.png" alt=""
                    className="skeleton w-full" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                </div>
            </div>
        </section>
    )
}

export default Freelancing