import React, { useReducer } from 'react';
import { useNavigate } from 'react-router';
import './Booking.css';
import BookingForm from './components/BookingForm';
import LittleLogo from './components/LittleLogo';
import Navbar from './components/Navbar';
import FooterLogo from './components/FooterLogo';
import Doormat from './components/Doormat';
import Contact from './components/Contact';
import Social from './components/Social';

const API_URL = "https://raw.githubusercontent.com/courseraap/capstone/main/api.js";

const fetchExternalAPI = async () => {
    const response = await fetch(API_URL);
    const scriptText = await response.text();
    
    // Evaluate the script safely
    const scriptFunction = new Function(scriptText + "; return { fetchAPI, submitAPI };");
    return scriptFunction();
};

const initializeTimes = () => [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:10 PM",
  "4:00 PM",
  "5:00 PM",
];

const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
        return initializeTimes();
    }
    return state;
};

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const { submitAPI } = await fetchExternalAPI();
        const success = submitAPI(formData);
        
        if (success) {
            navigate('/confirmedbooking');
        }
    };

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
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
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
    );
};

export default BookingPage;
