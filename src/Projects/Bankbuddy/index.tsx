import Header from "../template/header"

const BankBuddy = () => {
    const removeSkeleton = (img: HTMLImageElement) => {
        img.classList.remove('skeleton')
    }

    return (
        <section className="Section">
            <Header hero="bankbuddy.png" />
            <div id="projectDesc">
                <h2 className="projectHeading">
                    Bankbuddy For Banking Help
                </h2>
                <p className="projectHeading2">Title</p>
                <p className="projectText">College Final Project ~ A Chatbot & Voicebot For Banking Assistance</p>
                <p className="projectHeading2">Toolbelt</p>
                <p className="projectText">
                    Figma, HTML, CSS, Vanilla JavaScript, Python, Flask, Google Colaboratory, Google Sheets
                </p>
                <p className="projectHeading2">Role</p>
                <p className="projectText">
                UI / UX Design, Frontend Development, Logo Design, Collecting Data, Cleaning & Synchronizing It, Train The Model, Flask Development, Implementing Sheet API
                </p>
                <p className="projectHeading2">
                    Introduction
                </p>
                <p className="projectText">
                    BankBuddy is an AI chatbot for banking assistance, implemented using machine learning in Python. It's our final year project, made with Python module Tensorflow (keras, Sequential, Dense, Embedding, GlobalAveragePooling1D, Tokenizer, pad_sequences, LabelEncoder) Scikit-learn, Colorama, numpy etc. We in a 3-man group created this project.
                    <br /><br />
                    Creating a bot that can answer user queries for many banking topics like credit card, debit card etc. and making a webpage around it.
                </p>
                <img src="./projects/mikasa.png"  alt="" className="skeleton" loading="lazy"
                                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                <img src="./projects/bankbuddy4.png" alt="" 
                    className="skeleton" loading="lazy" 
                    onLoad={(e)=>removeSkeleton(e.currentTarget)} />
                <p className="projectHeading2">
                    Challenges Faced
                </p>
                <ul className="projectText">
                    <li>The main challenge was implementing the AI model. We tried and failed too many times.</li>
                    <li>A Working Demo for the design part (implemented with vanilla JavaScript and no ML) : <a className="text-themeGreen underline" target="_blank" href="https://ayank007.github.io/bankbuddy">https://ayank007.github.io/bankbuddy</a>.</li>
                    <li>Main Project source-code : <a className="text-themeGreen underline" target="_blank" href="https://github.com/ayank007/bankbuddySrc">https://github.com/ayank007/bankbuddySrc</a> (due to lack of data, it's not well-trained model)</li>
                </ul>
                <p></p>
                <img src="https://lh3.googleusercontent.com/ieeBfFVPHbkjlUF20bSWLDlVRIQWD__ShXi2PYhhi8OIRSEY_VKXabM2pCFGVvwKD5ill1AzRixx-oBLl3omr-YA-b7VynLEd599dawDsDYNH43TZDXIdWrPu1M282NffVWrLu_bwA=w2400" className="skeleton" loading="lazy" alt="" onLoad={(e)=>removeSkeleton(e.currentTarget)}  />
            </div>
        </section>
    )
}

export default BankBuddy