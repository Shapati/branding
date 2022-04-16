import React from 'react'
import spons1 from '../img/planday.png'
import spons2 from '../img/umbraco.png'
import spons3 from '../img/pearlfisher.png'
import spons4 from '../img/Brightpearl.png'
import spons5 from '../img/planday.png'
import './Sponsors.css'

export default function Sponsors() {
  return (
    <div className='sponsors'>
      <div className="sponsorimg">
        <img src={spons1} alt="" />
      </div>
      <div className="sponsorimg">
        <img src={spons2} alt="" />
      </div>
      <div className="sponsorimg">
        <img src={spons3} alt="" />
      </div>
      <div className="sponsorimg">
        <img src={spons4} alt="" />
      </div>
      <div className="sponsorimg">
        <img src={spons5} alt="" />
      </div>
    </div>
  )
}
