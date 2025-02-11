import './App.css'
import Navbar from './components/Navbar'
import LittleLogo from './components/LittleLogo'
import FooterLogo from './components/FooterLogo'



function App() {


  return (
    <>
      <div className="upperlogo">
          <LittleLogo />
      </div>

      <div className='barranav'>
           <Navbar />

      </div>

      <div className='section1'>
      Seccion1
      </div>

      <div className='section2'>
      Seccion2
      </div>

      <div className='section3'>
      Seccion3
      </div>

      <div className='section4'>
      Seccion4
      </div>

      <div className='footerlogo'>
      <FooterLogo />
      </div>

      <div className='doormat'>
      <p>Doormat</p>
      </div>

      <div className='contact'>
      <p>Contact</p>
      </div>

      <div className='social'>
      <p>Social Media</p>
      </div>
    </>
  )
}

export default App
