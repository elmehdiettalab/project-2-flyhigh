import React, {useState} from 'react'
import '../scss/tab.scss'; 

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


import flight from '../assets/airplane.png'; 
import hotel from '../assets/holiday.png'; 
import car from '../assets/taxi.png'; 
import calendar from '../assets/booking.png'
import next from '../assets/arrow.png'
const Tab = () => {
    const [Date,setDatePicker] = useState(null); 
    const [Date2,setDatePicker2] = useState(null); 

    return (
       <div className="tab-1 ">

                            <select >
                                <option value="round-trip">Round Trip</option>
                                <option value="AR">Ar</option>
                                <option value="ES">Es</option>
                            </select>
                            <select  >
                                <option value="2">02 Passengers</option>
                                <option value="3">03 Passengers</option>
                                <option value="4">04 Passengers</option>
                                <option value="5">05 Passengers</option>
                                <option value="6">06 Passengers</option>
                                <option value="7">07 Passengers</option>
                                <option value="8">08 Passengers</option>
                                <option value="9">09 Passengers</option>
                                
                            </select>
                            <select >
                                <option value="business-class">Business Class</option>
                                <option value="Economic Class">Ar</option>
                            </select>                     

                        <div className="cards">
                            <div className="card-1">
                                <span>From</span>
                                <h3>Rabat</h3>
                                <p>Morocco,Africa</p>
                            </div>
                            <div className="card-1">
                                <span>To</span>
                                <h3>Palawan</h3>
                                <p>Philippines,Asia</p>
                            </div>

                            <div className="card-date">
                                <span>Departure</span>
                                <DatePicker selected= {Date}  onChange={date => setDatePicker(date)} className= "datepick"/>
                                <img src={calendar} alt=""/>
                            </div>
                            <div className="card-date">
                                <span>Return</span>
                                <DatePicker selected= {Date2}  onChange={date => setDatePicker2(date)} className= "datepick"/>
                                <img src={calendar} alt=""/>
                            </div>
                        </div>
                </div>
    )
}

export default Tab;