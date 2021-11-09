import React from 'react'
import './PlaneCate.css'
import yugo2 from "../assets/p1.JPG";
import yugo3 from "../assets/p2.JPG";
import yugo4 from "../assets/p3.JPG";
function PlaneCategories() {
    return (
        <div className="container">
            
        <div class="card">
  
  <div class="container1">
   
    <p>
              <img
                src={yugo2}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
  </div>

  <div class="container1">
  <p>
              <img
                src={yugo3}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
  </div>

  <div class="container1">
  <p>
              <img
                src={yugo4}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
  </div>
  
</div>










</div>
    )
}

export default PlaneCategories
