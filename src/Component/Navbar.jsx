import React from 'react'
import './Nav.css'

function Navbar() {
    return (
        <div class="topnav">
        <a class="active" href="#home">PEDDLE</a>
        <a href="#news">About</a>
        <a href="#contact">FAQS</a>
        <a href="#news">About</a>
        <a href="#contact">Testmonials</a>
        <div class="topnav-right">
          <a href="#search">Sign in</a>
          <a href="#about">Sign Up</a>
        </div>
      </div>
    )
}

export default Navbar
