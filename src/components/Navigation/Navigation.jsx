import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Navigation.css"

const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    
    
    return (
        <>
            <nav>
                <h1>GYM <span>Heroes</span> </h1>
                <ul className={click ? "navLinks active" : "navLinks"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Gym Plans</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: 'rgb(231, 10, 139)'}} />) : (<FaBars size={25} style={{ color: 'rgb(231, 10, 139)' }} />)}

                </div>
            </nav>
        </>
    )
}

export default Navigation