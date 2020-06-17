import React, { Component } from 'react';
import '../scss/header.scss'; 

export class Header extends Component {
    render() {
        return (
            <header>
                <h3><a href="/">FlyHigh</a></h3>
                <ul className="nav-items-center">
                    <li><a href="#">Holiday Packages</a></li>
                    <li><a href="#">Flight Schedule</a></li>
                    <li><a href="#">Account Settings</a></li>
                    <li><a href="#">Manage Booking</a></li>
                </ul>

                <ul className="nav-items-side">
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">
                        <select id="lang" name="languages">
                            <option value="EN">En</option>
                            <option value="AR">Ar</option>
                            <option value="ES">Es</option>
                        </select>
                    </a></li>
                </ul>
            </header>
        )
    }
}

export default Header
