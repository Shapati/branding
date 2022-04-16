import React from 'react'
import "./work.css"
import test from '../img/01.svg'
import test2 from '../img/02.svg'
import tes3 from '../img/03.svg'
import createacc from '../img/createacc.svg'
import emoji from '../img/emoji.svg'
import search from '../img/search.svg'
export default function Work() {
  return (
    <div className='works'>
         <div className="firstwork">
      <h1>How it works</h1>
      <p>its about you and your family, having a comfortable payment <br/> exceptional service and a lender </p>
    </div>
    <div className="secondwork">
      <div className="workboxes">
        <div className="firstworkbox1">
          <div className="inside1">
            <img src={test }alt="" />
          </div>
          <div className="insideodd">
            <img src={createacc} alt="" />
          </div>
        </div> 
        <div className="secondworkbox">
          <h2>Create Account</h2>
          <p>we know your home is more than just a <br/> place to live, thats why were commited <br/> to providing the best home loan</p>
        </div> 
      </div>
      <div className="workboxes">
       
        <div className="secondworkbox">
          <h2>Search for Services</h2>
          <p>its the fast, easy way to apply for your <br/> mortgage and access your application <br/> anytime anywhere with our mortgage <br/> access scenter</p>
        </div> 
        <div className="firstworkbox2">
          <div className="inside1">
         <img  src={test2}alt="" alt="" />
          </div>
          <div className="inside2">
            <img src={search} alt="" />
          </div>
        </div> 
      </div>
      <div className="workboxes">
        <div className="firstworkbox3">
          <div className="inside1">
           <img  src={tes3 }alt="" alt="" />
          </div>
          <div className="inside2">
           <img src={emoji} alt="" />
          </div>
        </div> 
        <div className="secondworkbox">
          <h2>Sit back and Enjoy</h2>
          <p>its about you and your family, having a <br/> comfortable payment, exceptional service <br/> and a lender.</p>
        </div> 
      </div>
    </div>
  </div>
   
  )
}
