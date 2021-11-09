import React from 'react'
import './Section.css';
import yugo1 from "../assets/pic.JPG";
import   Button from './Button'
import  Text from './text'

function Section() {
    return (
        <div className="container">
        <div class="row">
  <div class="column">
      <span className="textheading">We Are Everything We<br/>
      Aspire To Be
      </span>
      <Text/>

      <Button/>



  </div>
  <div class="column">
  <p>
              <img
                src={yugo1}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
  </div>
</div>
</div>
    )
}

export default Section
