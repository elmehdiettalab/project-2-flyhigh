import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../scss/dashbord.scss'
const Dashbord = () => {
    let flight = useRef(null)

    const [isOpen1, setOpen1] = useState(false)
    const [isOpen2, setOpen2] = useState(false)
    const [isOpen3, setOpen3] = useState(false)
    const [active, setActive] = useState(false)



    return (
        <div className="content-inner">
            <div className={"page-accordion " + active.toString()}>
                <div className={"sidebar-acc "}>
                    <div className={"sidebar-top-acc "}>
                        <h3>{active === false ? "" : "FlyHigh"}</h3>
                        <p onClick={() => setActive(!active)}></p>
                    </div>


                    <ul className={"accordion "}>
                        <motion.li whileTap={{ scale: 0.6 }} onClick={() => { setOpen1(!isOpen1) }}><a href="#flight">{active === false ? "F" : "Flights"}</a></motion.li>
                        {isOpen1 === true && active === true &&
                            <div
                                className="inner" ref={el => (flight = el)} >
                                <motion.a href="#">Europe</motion.a>
                                <motion.a href="#">Africa</motion.a>
                                <motion.a href="#">America</motion.a>
                            </div>}
                        <motion.li whileTap={{ scale: 0.6 }} onClick={() => { setOpen2(!isOpen2) }} ><a href="#" >{active === false ? "H" : "Hotels"}</a></motion.li>
                        {isOpen2 === true && active === true &&
                            <div className="inner" id="hotel">
                                <a href="#">Europe</a>
                                <a href="#">Africa</a>
                            </div>}
                        <motion.li whileTap={{ scale: 0.6 }} onClick={() => { setOpen3(!isOpen3) }} ><a href="#">{active === false ? "C" : "Cars"}</a></motion.li>
                        {isOpen3 === true && active === true &&
                            <div className="inner">
                                <a href="#">Europe</a>
                                <a href="#">Africa</a>
                            </div>}

                        <li><a href="#">{active === false ? "L" : "Logout"}</a></li>
                    </ul>
                </div>
            </div>

           
        </div>
    )
}

export default Dashbord
