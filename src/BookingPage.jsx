import React from 'react'
import './Booking.css'
import BookingForm from './components/BookingForm'
import LittleLogo from './components/LittleLogo'
import Navbar from './components/Navbar'
import FooterLogo from './components/FooterLogo'
import Doormat from './components/Doormat'
import Contact from './components/Contact'
import Social from './components/Social'
import { useState } from 'react'



const BookingPage = () => {
  
  const [availableTimes, setAvailableTimes] = useState([
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]);


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
        <BookingForm availableTimes={availableTimes}/>
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

export default BookingPage;