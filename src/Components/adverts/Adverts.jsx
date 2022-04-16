import React from 'react'
import advert1 from '../img/star.svg'
import advert2 from '../img/siren.svg'
import advert3 from '../img/building.svg'
import './Adverts.css'
export default function Adverts() {
  return (
    <div className='advert'>
      <div className="firstadvert">
        <h1>Grow faster with help your <br /> customers</h1>
      </div>
      <div className="secondadvert">
        <div className="advertboxes">
          <img src={advert1} alt="" />
          <h3>Rating & <br /> reviews</h3>
          <p>collect reviews, Q&A and other <br /> content from your customers <br /> started</p>
        </div>
        <div className="advertboxes">
          <img src={advert2} alt="" />
          <h3>Sales and <br /> Marketing</h3>
          <p>Use your user-generated content <br /> in sales and <br /> marketing</p>
        </div>
        <div className="advertboxes" id='odd'>
          <img src={advert3} alt="" />
          <h3>Customer <br /> Experience</h3>
          <p>in the end, its all about your  <br /> customers. Build their trust and <br /> help</p>
        </div>
      </div>
    </div>
  )
}
