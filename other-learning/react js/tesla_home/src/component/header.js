import React from "react";
import ReactDOM from "react-dom";
import "./header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";

const Header = () => {
  return <div className ="header_file">
    <div className = "header_logo">
    <img src = {TeslaLogo} alt = 'Tesla Logo'></img>
    </div>
    <div className = "header_center">
    <p>Model S</p>
    <p>Model 3</p>
    <p>Model X</p>
    <p>Model Y</p>
    <p>Solar Roof </p>
    <p>solar panels</p>
    </div>
    <div className = "header_end">
        <p>Shop</p>
        <p>Tesla Account</p>
        <p>==</p>
    </div>   
    </div>;
}

export default Header;
