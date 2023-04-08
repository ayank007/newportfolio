import Header from "../template/header"
const FunProjects = () => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.classList.remove('skeleton')
    }
    return (
        <section className="Section">
            <Header hero="fun projects.jpg" />
            <div id="projectDesc" className="!block bg-white !pt-10">
                <div className="flex flex-wrap justify-around items-center gap-y-8 floatedImages floatedDivs">
                    <div>
                        <p><b>GEM bunch biding</b></p>
                        <p>
                            In GEM (Government e-Marketplace) portal uploading a bid to accept an order is very difficult when the number of products is too large, as we need to input price for each within a certain period of time before server logs the user out.
                        </p>
                        <img src="./projects/gemBid.png" alt=""
                        className="skeleton" loading="lazy" 
                        onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                        <p>
                            To solve this problem, I developed this chrome extension to make invoice uploading easier in GEM portal while bunch-biding. It takes excel sheet, convert the prices into standard values (like 0 to 0.01) and fill all the input fields. The software is very simple but helps bunch bidding process 50% easier.
                        </p>
                    </div>
                    <div>
                        <p><b>Word Highlighter</b></p>
                        <img src="./projects/wordHighlighter.png" className="!w-20" alt="" />
                        <p>This chrome extension highlight all the words I am looking for. It has some pre saved words but also takes some words as arguments. I make it look like a linkedin logo, as this software was primarily created to make job searching easier.</p>
                    </div>
                    <div>
                        <p><b>Map Scrapper</b></p>
                        <img src="./projects/fun projects.jpg" alt=""
                        className="skeleton" loading="lazy" 
                        onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                        <p>Python Selenium webdriver to scrape details from google map (April, 2023). It can be used as leads creation, marketing campaign helper etc. for businesses.</p>
                    </div>
                    <div>
                        <p><b>My old portfolios</b></p>
                        <img src="https://lh3.googleusercontent.com/z3bCM-UFtHSk374WA_XyRZ6S_MTKtwoxiuvcXHoxnM7ae3DpGXPOppUWJ_gFdvPNEpAT54i6PXpbLf1Y_Ya-kQGh8HcZtqajpvL0FbAJNs99t8epuQvEwLjCcLC3MCNzB589xuf_IA=w2400" alt=""
                        className="skeleton" loading="lazy" 
                        onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                        <img src="./projects/oldPortfolio.jpg" alt=""
                        className="skeleton" loading="lazy" 
                        onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunProjects