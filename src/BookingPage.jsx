import React from 'react'
import './Booking.css'
import BookingForm from './components/BookingForm'
import LittleLogo from './components/LittleLogo'
import Navbar from './components/Navbar'
import FooterLogo from './components/FooterLogo'
import Doormat from './components/Doormat'
import Contact from './components/Contact'
import Social from './components/Social'

export default function BookingPage() {
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

    {/* Booking Form */}
        <BookingForm></BookingForm>
    {/* Booking Form */}

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
