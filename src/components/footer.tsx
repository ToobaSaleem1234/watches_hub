import React from 'react'
import "../styles/footer.css"


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div style={{display:'flex', flexDirection:"column"}}>
        <h1>Watches Hub</h1>
        <p>Your one-step shop for all watches</p>
        </div>
        <ul>
        <h1>Subscribe</h1>
            <li>Get 10% off on your first order</li>
            <input type="text" placeholder='Enter your email' />
          </ul>
        <div>
          <h1>Support</h1>
          <br />
          <ul>
            <li>yums@gmail.com</li>
            <li>0305-1234567</li>
          </ul>
        </div>
        <div>
          <h1>Account</h1>
          <br />
          <ul>
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div>
          <h1>Quick Link</h1>
          <br />
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer