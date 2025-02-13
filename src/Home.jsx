
import React from 'react'
import './App.css'
import './components/SectionOne.css'
import './components/SectionTwo.css'
import './components/SectionThree.css'
import './components/SectionFour.css'
import Navbar from './components/Navbar'
import LittleLogo from './components/LittleLogo'
import FooterLogo from './components/FooterLogo'
import Doormat from './components/Doormat'
import SectionOneLeft from './components/SectionOneLeft'
import SectionOneRight from './components/SectionOneRight'
import SectionTwoCardOne from './components/SectionTwoCardOne'
import SectionTwoCardTwo from './components/SectionTwoCardTwo'
import SectionTwoCardThree from './components/SectionTwoCardThree'
import SectionThreeCardOne from './components/SectionThreeCardOne'
import SectionThreeCardTwo from './components/SectionThreeCardTwo'
import SectionThreeCardThree from './components/SectionThreeCardThree'
import Contact from './components/Contact'
import Social from './components/Social'
import Chef1 from './components/Chef1'
import Chef2 from './components/Chef2'


function Home() {

  return (
    <>
    <div className='container1'>
      {/* Navbar and logo */}

        <div className="upperlogo">
            <LittleLogo />
        </div>

        <div className='barranav'>
            <Navbar />
        </div>

      {/* End Navbar and logo */}

      {/* Section 1 */}

      <div className='section1'>
      <SectionOneLeft />
      </div>

      <div className='section1r'>
      <SectionOneRight />
      </div>

      {/* End Section 1 */}



      {/* Section 2 */}

      <div className='section2cardone'>
      <SectionTwoCardOne />
      </div>

      <div className='section2cardtwo'>
      <SectionTwoCardTwo />
      </div>

      <div className='section2cardthree'>
      <SectionTwoCardThree />
      </div>

      <div className='section2title'>
      <h1>This Week Specials!</h1>
      </div>

      <div className='section2button'>
      <button className='section2buttonstyle' type='button'>Online Menu</button>
      </div>

      {/* End Section 2 */}



      {/* Section 3 */}
      <div className='section3title'>
        <h1>Testimonials</h1>
      </div>

      <div className='section3box1'>
      <SectionThreeCardOne />
      </div>

      <div className='section3box2'>
        <SectionThreeCardTwo />
      </div>

      <div className='section3box3'>
        <SectionThreeCardThree />
      </div>

      <div className='section3background'></div>


      {/* End Section 3 */}



      {/* Section 4 */}

      <div className='section4title'>
      <h1>Little Lemon</h1>
      </div>

      <div className='section4subtitle'>
        <h2>Chicago</h2>
      </div>

      <div className='section4description'>
        <p>Born with Mediterranean origins, Little Lemon was founded by the Andorra brothers. Starting with a location on 5th Avenue, it has become one of the city's iconic restaurants thanks to its customers, its great team and a city that has allowed them to realize their dream.</p>
        <p>Over the years, Little Lemon has expanded its menu, blending traditional Mediterranean flavors with modern culinary techniques. The Andorra brothers have remained committed to sourcing the freshest ingredients, ensuring every dish reflects their passion for quality and authenticity. As word spread, the restaurant attracted a loyal following, from locals seeking a comforting meal to tourists eager to experience its renowned hospitality.</p>
      </div>

      <div className='chef1container'>
        <Chef1></Chef1>
      </div>

      <div className='chef2container'>
        <Chef2></Chef2>
      </div>

      {/* End Section 4 */}




      {/* Footer Section */}

      <div className='footerlogo'>
      <FooterLogo />
      </div>

      <div className='doormat'>
      <Doormat />
      </div>

      <div className='contact'>
      <Contact />
      </div>

      <div className='social'>
      <Social />
      </div>

      {/* End Footer Section */}
      </div>
    </>
  )
}

export default Home
