import React from 'react'
import bigcurve from '../img/bigcurve.svg'
import smallcurve from '../img/smallcurve.svg'
import './Getstarted.css'
export default function Getstarted() {
  return (
    <div className='getstarted'>
      <img src={bigcurve} alt="" />
      <img src={smallcurve} alt="" />
      <h1>Ready to get started?</h1>
      <p>Products on online services or over the Internet. Electronic commerce draws <br /> on technologies such as mobile  commerce application</p>

      <div className="email">
        <input type="text" placeholder='Enter your email address' />
        <button>Sign up</button>
      </div>

    </div>
  )
}
