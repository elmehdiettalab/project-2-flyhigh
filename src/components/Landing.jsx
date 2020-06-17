import React, { Component } from 'react';
import '../scss/landing.scss';
import next from '../assets/arrow.png'; 
export class Landing extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="hero">
                    <p>Hey Buddy! where are you <br/> 
                        <span>Flying</span> to? 
                    </p>
                    <button>Explore Now <img src={next} alt=""/></button> 

                </div>
                <ul className="foot">
                        <li><a href="#">Popular Destination</a></li>
                        <li><a href="#">Explore all</a></li>
                </ul>
            </div>
        )
    }
}

export default Landing
