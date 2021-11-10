import React from 'react'
import  './Features.css'
import yugo from "../assets/pic2.JPG";

function Features() {
    return (
        <div className="container">
       
        <div class="row">
        <div class="column2">
        <p>
              <img
                src={yugo}
                style={{ width: "100%", height: "300px",marginTop:"-3rem"}}
                alt=""
              />
            

            </p>
        </div>
        <div class="column2">

            <span style={{fontWeight:"bold", fontSize:"2rem",textAlign:"justify"}}>Features We Provid</span><br/>
            <span style={{fontWeight:"bold", fontSize:"2rem",textAlign:"right"}}> For You</span><br/>
            <span>Curabitur temper Justo non turpis malesuade cursu.</span><br/>
            <span>Mauris ac Libero cusem fimi bus nec puvier.</span>
            <div className="tri">
            <span className="triagle"></span><p style={{marginLeft:"2rem"}}>Curatur tempor justo</p>
           
            </div>
            <div className="tri">
            <span className="triagle"></span><p style={{marginLeft:"2rem"}}>Curatur tempor justo</p>
           
            </div>
            <div className="tri">
            <span className="triagle"></span><p style={{marginLeft:"2rem"}}>Curatur tempor justo</p>
           
            </div>
            <div className="tri">
            <span className="triagle"></span><p style={{marginLeft:"2rem"}}>Curatur tempor justo</p>
           
            </div>
        </div>
      </div>
      </div>
     
    )
}

export default Features
