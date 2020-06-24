import React, { Component , useEffect } from 'react';
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"

import '../scss/landing.scss';
import next from '../assets/arrow.png'; 
const Landing = () => {    
        return (
            <div className="wrapper">
                <div className="hero">
                    <motion.p 
                    
                    >Hey Buddy! where are you <br/> 
                        <span>Flying</span> to? 
                    </motion.p>
                    <motion.button
                        whileTap= {{scale: 0.8}}
                    >Explore Now <img src={next} alt=""/>
                    </motion.button> 

                </div>
                <ul className="foot">
                        <li><a href="#">Popular Destination</a></li>
                        <li><a href="#">Explore all</a></li>
                </ul>
            </div>
        )
    
}

export default Landing
