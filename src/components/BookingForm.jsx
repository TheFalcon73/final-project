
import React from 'react'
import '../Booking.css'
import panoramic from '../assets/panoramic.jpg'
import { useForm } from 'react-hook-form'


const BookingForm = ({availableTimes}) => {
    
    const {register, handleSubmit, 
        formState: {errors}
    }  = useForm();
    
    console.log(errors)

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <>
        <div className='backgroundbooking'>
            <h1>Reserve a Table</h1>
            <h2>Get ready to enjoy an unparalleled experience</h2>
            <p>Enter your reservation details and get ready to enjoy an unforgettable dining experience. In our restaurant, every detail is designed to create special moments, from the warmth of our ambiance to the excellence of our dishes. Let our staff pamper you and make your visit a unique memory, full of flavor and hospitality. Make your reservation now and experience something you'll want to relive!</p>
            <div className='panoramic'>
                <img
                  src={panoramic}
                />
            </div>    
        </div>
            <div className='formbox1'>
                <form className='formstyle' onSubmit={onSubmit}>  {/*FORM*/}

                    <label htmlFor="resdate">Choose date</label>
                    <input
                        type="date"
                        id="resdate" 
                        {...register("resdate", {required: true})}
                    ></input>
                    
                    {
                        errors.resdate && <span>Date is required</span>
                    }

                    <label htmlFor="restime">Choose time</label>
                    <select id="restime " {...register("restime", {required: true})}>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                             {time}
                            </option>
                        ))}
                    </select>

                    {
                        errors.restime && <span>Time is required</span>
                    }

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number" placeholder="1" min="1" max="10" id="guests"
                        {...register("guests", {required: true})}
                    ></input>

                    {
                        errors.guests && <span>Number of guests is required</span>
                    }

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" {...register("occasion", {required: true})}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>No occasion</option>
                    </select>

                    {
                        errors.occasion && <span>Occasion is required</span>
                    }

                    <button
                        id="reservationbutton"
                        type='submit'
                    >Check availability</button>

                </form>
            </div>

        </>
    )
}

export default BookingForm
