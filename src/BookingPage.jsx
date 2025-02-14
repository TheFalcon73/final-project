import React from 'react'
import './Booking.css'
import BookingForm from './components/BookingForm'
import LittleLogo from './components/LittleLogo'
import Navbar from './components/Navbar'
import FooterLogo from './components/FooterLogo'
import Doormat from './components/Doormat'
import Contact from './components/Contact'
import Social from './components/Social'
import { useReducer  } from 'react'

// Función para inicializar los horarios disponibles
const initializeTimes = () => [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:10 PM",
  "4:00 PM",
  "5:00 PM",
];

// Reducer que maneja cambios en los horarios disponibles
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      // Por ahora, devolvemos los mismos horarios sin importar la fecha
      return initializeTimes();
    }
    return state;
  };

const BookingPage = () => {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
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