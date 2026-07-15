import React from "react";
import logo from "../components/Images/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"/>
        <ul class="nav-links">
    <li><a href="#">MENU</a></li>
    <li><a href="#">LOCATION</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">CONTACT</a></li>
</ul>
      <button className='btn1'>Login</button>
     
    </div>
  )
}

export default Navbar;
