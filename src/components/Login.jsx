import React from 'react'
import { Link } from 'react-router-dom'
import Particles from "react-particles-js";
import '../scss/login.scss'

import fb from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';
import paypal from '../assets/paypal.png';


const Login = () => {
    const css = {

    }
    return (

        <div >
            <header>
                <h3><Link to="/">FlyHigh</Link></h3>
            </header>

            {/* Particles background  */}
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 600,
                            density: {
                                enable: false,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#cf7500"
                        },
                        size: {
                            value: 4,
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    }
                }}
            />
            {/* ========= ======= 
            
            
            ======  LOGIN  ==== 
            
            ====================
            
            */}
            <div className="login-form">
                <h2>Sign In</h2>
                <form>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <p>Don't have an account?
                        <Link to="/register">Sign Up</Link>
                    </p>

                    <ul className="social">
                        <li><img src={fb} alt="" /></li>
                        <li><img src={linkedin} alt="" /></li>
                        <li><img src={gmail} alt="" /></li>
                        <li><img src={paypal} alt="" /></li>
                        
                    </ul>
                    <input type="submit" value="Login" />

                </form>
            </div>
        </div>
    )
}

export default Login
