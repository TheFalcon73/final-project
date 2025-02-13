
import React from 'react'
import '../Booking.css'
import panoramic from '../assets/panoramic.jpg'


const BookingForm = (alt = "Panoramic Picture of the Restaurant") => {
    return (
        <>
        <div className='backgroundbooking'>
            <h1>Reserve a Table</h1>
            <h2>Get ready to enjoy an unparalleled experience</h2>
            <p>Enter your reservation details and get ready to enjoy an unforgettable dining experience. In our restaurant, every detail is designed to create special moments, from the warmth of our ambiance to the excellence of our dishes. Let our staff pamper you and make your visit a unique memory, full of flavor and hospitality. Make your reservation now and experience something you'll want to relive!</p>
            <div className='panoramic'>
                <img
                  src={panoramic}
                  alt={alt}
                />
            </div>    
        </div>
            <div className='formbox1'>
                <form className='formstyle'>
                    <label hrmlfor="res-date">Choose date</label>
                    <input type="date" id="res-date"></input>
                    <label htmlfor="res-time">Choose time</label>
                    <select id="res-time ">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlfor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests"></input>
                    <label htmlfor="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input id="reservationbutton" type="submit" value="Make Your reservation"></input>
                </form>
            </div>

        </>
    )
}

export default BookingForm
