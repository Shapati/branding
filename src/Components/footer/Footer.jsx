import React from 'react'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linked_in.svg'
import facebook from '../img/f.svg'
import twitter from '../img/twitter.svg'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footercontainer">

     
      <div>
        <h1>brand.io</h1>
        <p>Nor again is there anyone who loves or pursues or <br /> desires to obtain pain of <br /> itself.</p>
      </div>
      <div>
        <h2>About</h2>
        <p>Home</p>
        <p>Features</p>
        <p>FAQ's</p>
        <p>Reviews</p>
        <p>Stories</p>
      </div>
      <div>
        <h2>Privacy</h2>
        <p>Privacy</p>
        <p>Policy</p>
        <p>Payment</p>
        <p>Terms</p>
        
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p></p>
        <p>nifemiayandiran@gmail.com</p>
        <div className="imgcontacts">
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}
