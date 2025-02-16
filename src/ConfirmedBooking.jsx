import React from 'react'
import './Booking.css'
import LittleLogo from './components/LittleLogo'
import Navbar from './components/Navbar'
import FooterLogo from './components/FooterLogo'
import Doormat from './components/Doormat'
import Contact from './components/Contact'
import Social from './components/Social'
import ConfirmedBookingContent from './components/ConfirmedBookingContent'



const ConfirmedBooking = () => {

  
  return (
    <div className='container2'>
    {/* Navbar and logo */}
        <div className="upperlogo">
            <LittleLogo />
        </div>

        <div className='barranav'>
            <Navbar />
        </div>
    {/* End Navbar and logo */}
    <ConfirmedBookingContent />
    {/* Confirmed Booking Component */}
   
    {/* End of Confirmed Booking Component */}

    {/* Footer */}
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
    {/* End Footer */}
    </div>
    
  )
}

export default ConfirmedBooking;