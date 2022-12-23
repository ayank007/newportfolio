import './style.scss'
import Hero from './hero'
import TypeWriter from './typeWriter'

// images
import Grid from '../../assets/hero/gridBg.png'
import FigmaLogo from '../../assets/hero/figma.png'
import Polygon from '../../assets/hero/polygon.png'
import GsapLogo from '../../assets/hero/gsapLogo1.gif'
import JavaScriptLogo from '../../assets/hero/javascript.png'
import Plant from '../../assets/hero/plant.svg'
import TechBox from '../../assets/hero/techBox.svg'
import Decoration3 from '../../assets/hero/decoration3.svg'
import Decoration9 from '../../assets/hero/decoration9.svg'
import MagneticElement from '../../utils/magneticElement'

const Header = () => {

    return (
        <section id="Header" data-scroll-section className="overflow-hidden">
            <div className='mainContainer px-base h-full z-10'>
                <div className="numbers -z-10 text-xl absolute left-0 -top-80 font-semibold flex flex-col text-white gap-8 opacity-20">
                    <p>30</p>
                    <p>31</p>
                    <p>32</p>
                    <p>33</p>
                    <p>34</p>
                    <p>35</p>
                    <p>36</p>
                    <p>37</p>
                    <p>38</p>
                    <p>39</p>
                    <p>40</p>
                    <p>41</p>
                    <p>42</p>
                    <p>43</p>
                    <p>44</p>
                    <p>45</p>
                    <p>46</p>
                    <p>47</p>
                    <p>48</p>
                    <p>49</p>
                    <p>50</p>
                    <p>51</p>
                    <p>52</p>
                    <p>53</p>
                    <p>54</p>
                    <p>55</p>
                    <p>56</p>
                    <p>57</p>
                    <p>58</p>
                    <p>59</p>
                    <p>60</p>
                </div>
                <div className="texts w-1/2 pl-24 flex flex-col justify-center h-full z-10">
                    <img src={Polygon} alt="Polygon" className='decoration2' />
                    <img src={Decoration3} alt="Decoration3" className='decoration3' />
                    <div className="decoration4">*</div>
                    <div>
                        <div className="decoration1">
                            &#60;/&#62;
                        </div>
                        <h1 data-scroll data-scroll-speed="3" className='-mt-10'>Ayan Koley</h1>
                    </div>
                    <p className='description' data-scroll data-scroll-speed="2">
                    Hello 👋, welcome to my interactive resume. I’m a full-stack developer based in India. 
                    </p>
                    <br /><br />
                    <div data-scroll data-scroll-speed="1">
                        <MagneticElement padding={true} velocity={100}>
                            <div className='callToActionBtn'>
                                <div className="icon">
                                    <div className="ball"></div>
                                </div>
                                Know me more
                            </div>
                        </MagneticElement>
                    </div>
                </div>
                <p></p>
                <div className="circle1"></div>
                <div className='heroImg absolute bottom-0 right-0'>
                    <div className="tagLine">
                        <TypeWriter />
                    </div>
                    <Hero />
                    <img src={JavaScriptLogo} alt="JavaScript Logo" className='jsLogo' />
                    <img src={FigmaLogo} alt="Figma Logo" className='fLogo' />
                </div>
                <div className="gsapLogo flex items-end flex-col absolute z-10">
                    <img src={GsapLogo} alt="GSAP" className='w-20 -mb-1' />
                    <div className='w-28 h-6 rounded-3xl border border-solid border-white flex items-center'>
                        <div className="ball bg-white rounded-full w-6 h-6 ml-6"></div>
                    </div>
                </div>
                <img src={Plant} alt="Plant" className='absolute left-1/3 bottom-0' />
                <img src={TechBox} alt="TechBox" className='absolute bottom-0' style={{left: '45%'}} />
                <div className="decoration5"></div>
                <div className="decoration6"></div>
                <div className="decoration7"></div>
                <div className="decoration8"></div>
            </div>
            <img src={Grid} alt="Grid Background" className='absolute bottom-0 left-1/4' />
            <img src={Decoration9} alt="Decoration 9" className='decoration9' />
        </section>
    )
}

export default Header
