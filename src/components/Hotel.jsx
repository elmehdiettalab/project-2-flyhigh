import React , {useState} from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import calendar from '../assets/booking.png'
import prev from '../assets/return.png'
import next from '../assets/next.png'
import hotel1 from '../assets/hotel.jpg'; 
import '../scss/hotel.scss'
const Hotel = () => {
    const [Date,setDatePicker] = useState(null); 
    const [Date2,setDatePicker2] = useState(null); 

    return (
        <div className="tab-2">
            <select  >
                <option value="2">02 people </option>
                <option value="3">03 </option>
                <option value="4">04 </option>
                <option value="5">05 </option>
                <option value="6">06 </option>
                <option value="7">07 </option>
                <option value="8">08 </option>
                <option value="9">09 </option>

            </select>

            <div className="information">
                <div className="hotel-info">
                    <h3>Tulip</h3>
                    <p><a href="#">View in Map</a></p>
                </div>

                <div className="hotel-carossel">
                    <img src={hotel1} alt="" />
                    <img src={prev} alt="" />
                    <img src={next} alt="" />
                </div>

                <div className="card-date">
                    <span>Checkin</span>
                    <DatePicker selected={Date} onChange={date => setDatePicker(date)} className="datepick" />
                    <img src={calendar} alt="" />
                </div>
                <div className="card-date">
                    <span>Checkout</span>
                    <DatePicker selected={Date2} onChange={date => setDatePicker2(date)} className="datepick" />
                    <img src={calendar} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Hotel
