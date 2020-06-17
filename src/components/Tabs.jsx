import React, { Component , useState} from 'react'
import '../scss/tabs.scss'; 
//DatePicker
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//IMAGES 
import flight from '../assets/airplane.png'; 
import hotel from '../assets/holiday.png'; 
import car from '../assets/taxi.png'; 
import calendar from '../assets/booking.png'
import next from '../assets/arrow.png'
const Tabs = () => { 
        const [Date,setDatePicker] = useState(null); 
        const [Date2,setDatePicker2] = useState(null); 
        const [tab1, setTab1] = useState("active"); 
        const [tab2, setTab2] = useState(""); 
        const [tab3, setTab3] = useState(""); 
        


        // const toggle1 = () => {
        //     setTab1("active") ; 
        //     setTab2(""); 
        //     setTab3(""); 
        // }
        // const toggle2 = () => {
        //     setTab2("active") ; 
        //     setTab1(""); 
        //     setTab3(""); 
        // }
        // const toggle3 = () => {
        //     setTab3("active") ; 
        //     setTab2(""); 
        //     setTab1(""); 
        // }

        return (
            <div className="tabs">
                <ul className="tabList">
                    <li><a href="#"> <img src={flight} alt="" /> Flight</a></li>
                    <li><a href="#"> <img src={hotel} alt="" /> Hotel</a></li>
                    <li><a href="#"> <img src={car } alt="" /> Rent a Car</a></li>
                </ul>
                <div className={"tab-1 " + tab1 }>

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

               

                <button className="searchFlights"> Search Flights <img src={next} alt=""/></button>
            </div>
        )
    
}

export default Tabs
