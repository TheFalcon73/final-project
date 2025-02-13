import React from 'react'
import './Booking.css'
import BookingForm from './components/BookingForm'
import LittleLogo from './components/LittleLogo'
import Navbar from './components/Navbar'

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
    <BookingForm></BookingForm>
    </div>
  )
}
