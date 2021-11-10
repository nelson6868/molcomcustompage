import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from "react-bootstrap";

import './Nav.css'

function Navigaton() {
    return (



      <div className="container">
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-lg-end">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: "250px" }}
            navbarScroll
          >
            <Nav style={{color:"purple",fontSize:"1rem",fontWeight:"bolder",justifyContent:"space-between"}}>
            PEDDLE
            </Nav>
            <Nav>
            About
            </Nav>
            <Nav>
            FEQS
            </Nav>
            <Nav>
             Pricing
            </Nav>
            <Nav>
            Testimonials
            </Nav>
            <Nav>
            SignIn
            </Nav>
            <button type="button"  style={{borderColor:"purple",backgroundColor:"white",color:"purple"}} >
           <Nav>

           Sign U
           </Nav>
           </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
//       <nav className="navbar navbar-default nav-sec navbar-fixed-top">
//         <div className="container">
//       <div className="navbar-header">
     
//       <Link  style={{color:"purple",fontSize:"1rem",fontWeight:"bolder"}}>PEDDLE</Link>
//       <Link className="navbar-brand"></Link>
//       <Link className="navbar-brand" ></Link>
//   </div>
//   <div className="navbar-header">
     
//       <Link className="navbar-brand">About</Link>
//       <Link className="navbar-brand">FEQS</Link>
//       <Link className="navbar-brand">Pricing</Link>
//       <Link className="navbar-brand">Testimonials</Link>
//   </div>
//   <div className="navbar-header">
     
      
//       <Link className="navbar-brand">Sign In</Link>
//   </div>
//   <button type="button"  style={{borderColor:"purple",backgroundColor:"white",color:"purple"}} >
//       <Link >Sign Up</Link>
//       <Link className="icon-bar"></Link>
//       <Link className="icon-bar"></Link>
//       <Link className="icon-bar"></Link>
//       </button>
// </div>
// </nav>
    )
}

export default Navigaton
