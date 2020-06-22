import React, { Component , useState} from 'react'
import {Link} from 'react-router-dom'
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
import Flight from './Flight';
import Hotel from './Hotel';
const Tabs = () => { 
        
        const [state, handleState] = useState(1); 
        


        

        return (
            <div className="tabs">
                <ul className="tabList">
                    <li className={ state === 1 && "active" } onClick= {() => handleState(1)}><a href="#"> <img src={flight} alt="" /> Flight</a></li>
                    <li className={state ===2 && "active" }onClick= {() => handleState(2)}><a href="#"> <img src={hotel} alt="" /> Hotel</a></li>
                    <li className={state === 3 && "active"} onClick= {() => handleState(3)}><a href="#"> <img src={car } alt="" /> Rent a Car</a></li>
                </ul>
                {state === 1 && <Flight />}
                {state === 2 && <Hotel />}
                {state === 3 && <Flight />}


               

                <Link to='/searchFlights'>
                <button className="searchFlights"> Search Flights <img src={next} alt=""/></button>

                </Link>
            </div>
        )
    
}

export default Tabs
