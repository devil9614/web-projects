import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee,faTimes,faBars} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }
    return (
        <>
        <nav className="navbar">
            <div className="navbarContent">
                <Link to = "/" className = "navbarLogo">R & W <FontAwesomeIcon icon = {faCoffee} /></Link>
                <div className = "menu-icon" onClick = {handleClick}>
                    <i className = {click ? "fa fa-times" : "fa fa-bars"}/>
                </div>
                <ul className = {click ? "nav-menu-active" : "nav-menu"}>
                    <li className = "nav-item"><Link to = "/" className = "nav-links" onClick = {closeMobileMenu}>Home</Link></li>
                    <li className = "nav-item "><Link to = "/about" className = "nav-links" onClick = {closeMobileMenu}>About Us</Link></li>
                    <li className = "nav-item"><Link to = "/contact" className = "nav-links" onClick = {closeMobileMenu}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )

}

export default Navbar
