
import React from 'react'
import '../Booking.css'


const BookingForm = () => {
    return (
        <>
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
                    <input type="submit" value="Make Your reservation"></input>
                </form>
            </div>

        </>
    )
}

export default BookingForm
