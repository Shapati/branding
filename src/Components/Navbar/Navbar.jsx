import React from 'react'
import './Navabr.css'
export default function Navbar() {
  return (
  <nav>
    <div className="firstnav">
      <h2>brand.io</h2>
    </div>
    <div className="secondnav">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Testimonials</a>
      <a href="">Contact</a>
    </div>
    <div className="thirdnav">
      <a href="">Login</a>
      <a href="">Sign up</a>
    </div>
  </nav>
  )
}
