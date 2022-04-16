import React from 'react'
import './Clients.css'
import stars from '../img/stars.svg'
import arrowleft from '../img/arrowleft.svg'
import arrowright from '../img/arrowright.svg'
export default function Clients() {
  return (
    
    <div className="clients">
         <div className="fristclient">
      <h1>
          WHAT OUR CLIENTS SAY
      </h1>
      <p>Community development is often linked with cocmmunity work or coomunity <br /> planning and may involve stakeholders, fiunddations</p>

    </div>
      <div className="clientbackground">

      </div>
      <div className="clientcontainer">
 
    <div className="secondclient">
     
      <div className="clienetbox">
        <img src={stars}alt=""/>
        <p>yet preference connnection unpleasant <br /> yet melancholy but and appearance. <br /> And excellence partialy estimating <br /> terminated day everything</p>
        <h5>sobo Masties</h5>
        <h6>founder @ rolex</h6>

      </div>
      <div className="clienetbox">
        <img src={stars} alt=""/>
        <p>yet preference connnection unpleasant <br /> yet melancholy but and appearance. <br /> And excellence partialy estimating <br /> terminated day everything</p>
        <h5>sam</h5>
        <h6>founder @ migenko</h6>

      </div>
      <div className="clienetbox">
        <img src={stars} alt=""/>
        <p>yet preference connnection unpleasant <br /> yet melancholy but and appearance. <br /> And excellence partialy estimating <br /> terminated day everything</p>
        <h5>Mansur</h5>
        <h6>founder @ google</h6>

      </div>
      </div>

      <div className="arrows">
        <div className="arrow1">
            <img src={arrowleft} alt="" />
        </div>
        <div className="arrow2">
            <img src={arrowright} alt="" />
        </div>
      </div>

    
    </div>

  </div>
  )
}
