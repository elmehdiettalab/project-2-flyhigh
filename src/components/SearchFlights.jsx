import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// ********  SASS ***********
import '../scss/searchFlights.scss';
// ********  COMPONENTs ***********
import Header from './Header';
import { mapRange } from 'gsap/gsap-core';

// ********  IMAGEs ***********
import bg from '../assets/airplane-01.png';
// ********  DATABASE ***********
import { FLIGHTS } from './flightArray'

const SearchFlights = () => {

    // const [flights, setF] = useState({});
    // const [date, setDate] = useState("");
    // const [flight , setFlight] = useState({})
    // useEffect(() => {
    //     fetch(API + API_KEY)
    //         .then(res => res.json())
    //         .then(res => {
    //             setF(res.data);
    //             setDate(flights[0].flight_date)
    //         })
    //         .catch(err => console.log(err));

    // });
    return (
        <div className="airport">
            <header>
                <h3><Link to="/">FlyHigh</Link></h3>
            </header>
            <div className="wrapper">
                {FLIGHTS.map((flight) =>
                    <div className="flight">
                        <p className="from">
                            {flight.city} <br/>
                            <span>{flight.airport} </span>
                        </p>
                        <p className="to">
                            {flight.to} <br/>
                            <span>{flight.air_to} </span>
                        </p>
                        <p className="time">
                            Scheduled: <br/>
                        <span>{flight.flight_date} </span>
                        </p>

                    </div>

                )}
                <div className="img-bg">
                    <img src={bg} alt=""/>
                    <p>Find Your Next Destination</p>
                </div>
            </div>
        </div>
    )
}

export default SearchFlights
