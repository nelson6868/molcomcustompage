import React from 'react'
import  './Features.css'
import yugo from "../assets/pic2.JPG";

function Features() {
    return (
        <div className="container">
        <div class="row">
        <div class="column">
        <p>
              <img
                src={yugo}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
        </div>
        <div class="column">

            <span style={{fontWeight:"bold", fontSize:"2rem"}}>Features We Provide<br/> For You</span>
        </div>
      </div>
      </div>
    )
}

export default Features