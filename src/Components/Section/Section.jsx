import React from 'react'
import './Section.css'
import image1 from '../img/20+ years experience.png'
import image2 from '../img/Card 10.svg'
import image3 from '../img/card.svg'
import image4 from '../img/emoji1.svg'
import image5 from '../img/profile.svg'
import image6 from '../img/Button demo Video.svg'
import decorate1 from '../img/decorator.png'
import decorate2 from '../img/decorator2.png'
import decorate3 from '../img/decorator3.png'
export default function Section() {
  return (
    <div className="section">

   
    <section>
      <div className="firstsection">
        <h1>
          Tell a <span>bettter <br /> brand</span>  story
        </h1>  
        <p>Literature surrounded insensible at indulgence or to <br />  admiration remarkably.Matter futer lovers desire marked <br /> boy use. chamber reached do he nothing be.</p>

      <div className="sectionlinks">
        <a href="">EXPLORE MORE</a>
        <a href="">Contact Us</a>
      </div>
      </div>
      
      <div className="secondsection">
        {/* <div className="image1">
          <img src={image1} alt="" />
        </div>
        <div className="image2">
          <img src={image2} alt="" />
        </div>
        <div className="image3">
          <img src={image3} alt="" />
        </div>
        <div className="image4">
          <img src={image4} alt="" />
        </div>
        <div className="image5">
          <img src={image5} alt="" />
        </div>
        <div className="image6">
          <img src={image6} alt="" />
        </div> */}
      </div>

      
    </section>

    <div className="decorators">
      <div id="decorate1">
        <img src={decorate1} alt="" />
      </div>
      <div id="decorate2">
        <img src={decorate2} alt="" />
      </div>
      <div id="decorate3">
        <img src={decorate3} alt="" />
      </div>
    </div>

    </div>
  )
}
