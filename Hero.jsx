import React from 'react'
import Swiigy from '../components/Images/swiigy.png'
import Zomato from '../components/Images/zomato.png'
import Kfc from '../components/Images/kfc.jpg'
const Hero = () => {
  return (
    <div className="hero">
    <div className="left">
        <span className="title">TASTE THE BEST KFC CHICKEN.</span>
        <p>Enjoy the world-famous KFC chicken made with the legendary blend of 11 herbs and spices. 
          Crispy on the outside, tender on the inside, every bite delivers unforgettable flavor. Order your favorite meals today and satisfy your cravings with KFC.
        </p>
        <div className="btns">
            <button className="btn1">ORDER NOW</button>
            <button className="btn2">KFC CHICKEN</button>
        </div>
        <div className="socials">
          <span className="social-1">Also available on</span>
        </div>
        <div className="social-icons">
          <img src={Swiigy} alt="Swiggy"/>
          <img src={Zomato} alt="Zomato"/>
        </div>
    </div>
    <div className="right">
      <img src={Kfc} alt="kfc"/>
    </div>
    </div>
  )
}

export default Hero
