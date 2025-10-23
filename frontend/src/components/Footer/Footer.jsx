import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
    <img src={assets.logo} alt=""/>
    <p>© 2025 FoodieExpress — Bringing happiness to your doorstep 🍕  
Order fast, eat fresh, and enjoy every bite!
</p>
    <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt=""/>
        <img src={assets.twitter_icon} alt=""/>
        <img src={assets.linkedin_icon} alt=""/>
    </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li> Delivery</li>
            <li> privacy policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91 7736248083</li>
                <li>contact@foodie.com</li>
             </ul>
             </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright 2025 @foodie.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer