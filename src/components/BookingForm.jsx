
import React, { useEffect, useReducer, useState } from 'react';
import '../Booking.css';
import panoramic from '../assets/panoramic.jpg';
import { useForm } from 'react-hook-form';

const API_URL = "https://raw.githubusercontent.com/courseraap/capstone/main/api.js";

const fetchExternalAPI = async () => {
    const response = await fetch(API_URL);
    const scriptText = await response.text();
    
    // Evaluate the script safely
    const scriptFunction = new Function(scriptText + "; return { fetchAPI, submitAPI };");
    return scriptFunction();
};

const initializeTimes = async (dispatch) => {
    const { fetchAPI } = await fetchExternalAPI();
    const times = fetchAPI(new Date());
    dispatch({ type: "SET_TIMES", times });
};

const updateTimes = async (date, dispatch) => {
    const { fetchAPI } = await fetchExternalAPI();
    const times = fetchAPI(new Date(date));
    dispatch({ type: "SET_TIMES", times });
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TIMES":
            return action.times;
        default:
            return state;
    }
};

const BookingForm = ({ submitForm }) => {
    const [availableTimes, dispatch] = useReducer(reducer, []);
    const [apiLoaded, setApiLoaded] = useState(false);

    useEffect(() => {
        initializeTimes(dispatch).then(() => setApiLoaded(true));
    }, []);

    const handleDateChange = (event) => {
        updateTimes(event.target.value, dispatch);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        submitForm(data);
    });

    if (!apiLoaded) return <p>Loading available times...</p>;

    return (
        <>
            <div className='backgroundbooking'>
                <h1>Reserve a Table</h1>
                <h2>Get ready to enjoy an unparalleled experience</h2>
                <p>Enter your reservation details and get ready to enjoy an unforgettable dining experience...</p>
                <div className='panoramic'>
                    <img src={panoramic} alt='Panoramic view' />
                </div>
            </div>
            <div className='formbox1'>
                <form className='formstyle' onSubmit={onSubmit}>  
                    <label htmlFor="resdate">Choose date</label>
                    <input type="date" id="resdate" {...register("resdate", { required: true })} onChange={handleDateChange} />
                    {errors.resdate && <span>Date is required</span>}

                    <label htmlFor="restime">Choose time</label>
                    <select id="restime" {...register("restime", { required: true })}>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                    {errors.restime && <span>Time is required</span>}

                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" {...register("guests", { required: true })} />
                    {errors.guests && <span>Number of guests is required</span>}

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" {...register("occasion", { required: true })}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>No occasion</option>
                    </select>
                    {errors.occasion && <span>Occasion is required</span>}

                    <button id="reservationbutton" type='submit'>Reserve Table</button>
                </form>
            </div>
        </>
    );
};

export default BookingForm;
