import Header from "../template/header"

const Portfolio = () => {
    return (
        <section className="Section">
            <Header hero="portfolio.png" />
            <div id="projectDesc">
                <h2 className="projectHeading">A Work That Defines Me</h2>
                <p className="projectHeading2">Toolbelt</p>
                <p className="projectText">
                    Figma, HTML/TSX, CSS/SCSS, JavaScript/TypeScript, React, GSAP
                </p>
                <p className="projectHeading2">Color palate</p>
                <div className="projectText colorPalate">
                    <div>
                    <div className="color color1"></div>
                    <p className="desc">Firefly: Theme background color in dark section and theme color in light section</p>
                    </div>
                    <div>
                    <div className="color color2"></div>
                    <p className="desc">Increasing the greenness with Mountain Meadow, it's shades and it's opposite blend color.</p>
                    </div>
                    <div>
                        <div className="colorsBg">
                            <div className="color color3"></div>
                            <div className="color color5"></div>
                            <div className="color color6"></div>
                            <div className="color color7"></div>
                        </div>
                        <p className="desc">Some highlighters: Coral, Blue Stone, Electric Violet, Cornflower Blue etc.</p>
                    </div>
                    <div>
                    <div className="color color4"></div>
                    <p className="desc">Hint of Green: An opposite color to the theme to light-heartening the mood, used as theme color opposite to Firefly</p>
                    </div>
                </div>
                <p className="projectHeading2">Features</p>
                <p className="projectText">
                    I divided this website into 4 parts i.e. Header, Projects, About and Contact.
                    <ul>
                        <li>
                            <b>Header:</b> Website starts with my intro ~ simple, bright and large. I try to present a short overview of what I do professionally with the some Hero SVGs.
                        </li>
                        <li>
                            <p>
                            <b>Projects:</b> I have unlimited half finished projects to complete, many codepens and also many project I have lost. Most of those definitely deserve the spots here, BUT i have decided only to put very few completed projects here.
                            </p>
                            <p>Clicking on the project banner will leads to it's corresponding dedicated pages.</p>
                        </li>
                        <li>
                            <b>About:</b> About section is divided into 3 parts, showing my professional skills, My resume with 4 interesting templates and my favorite hobbies.
                        </li>
                        <li>
                            <b>Contact:</b> As every portfolio, mine's also has a contact form. I have to agree that with my color choices and theme selection, I could not paint the best version of contact form, that might contains some emojis or confetti animations; but I'm happy with the results. 
                        </li>
                        <li>
                            <p><b>Bonus section: THE FOOTER</b></p>
                            <p>My footer is not the reflection of my current room yet. Some things are missing like a recliner, sofa, bean bag, a world map, dart boards, my cameras, my jersey collections, shoe rack, telescope, skates and lastly my favorite bed. Some plans are still pending, but I am on it.</p>
                        </li>
                    </ul>
                </p>
                <p className="projectHeading2">
                    Challenges Faced
                </p>
                <ul className="projectText">
                    <li>
                        As everyone says a Portfolio should not be flashy but simple, it should include less personal nonsense and show more works. My toughest challenge was to match this criteria. I tried it, maybe failed but I guess it's fine. It totally represent my attitude and basic skills like what a portfolio should do. I made it as a Fontend developer, so I skips some design principles.
                    </li>
                    <li>
                        Next biggest challenge was to create case studies for my freelancing works and other projects, in which I definitely failed. I know, case study is not only for designers only, but also for all the developers. But it really hard to keep record of all the challenges I faced and overcome. 
                    </li>
                    <li>
                        <p><b>NOT everything are "easier said than done"</b>, some are total opposite.</p>
                        <p>While making page transition animation and the loading animation, I realized it was very much easier to execute than it looks in my diary. I took some concepts from cool websites, and implement it with some dev tools help. It inspires me to go after and recreate some award winning websites.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio