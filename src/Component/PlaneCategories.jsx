import React from 'react'
import './PlaneCate.css'
import yugo2 from "../assets/p1.JPG";
import yugo3 from "../assets/p2.JPG";
import yugo4 from "../assets/p3.JPG";


function  PlaneCategories() {
    return (
        

        
            
        <div className="container">
            <div className="row">
  <div className="column1">
    <div className="card">
    <p>
              <img
                src={yugo2}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"rem",width:"30%"}}>Mauris sem naque</span>
            </div>
            <bold>Free</bold>
    </div>
  </div>
  <div className="column1">
    <div className="card">
    <p>
              <img
                src={yugo3}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
            <bold>Stantdard</bold>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
    </div>
  </div>
  <div className="column1">
    <div className="card">
    <p>
              <img
                src={yugo4}
                style={{ width: "100%", height: "300px" }}
                alt=""
              />
            

            </p>
            <bold>Premur</bold>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
            <div style={{display:"flex",textAlign:"center",width:"30%"}}>
                <p><i class="fa fa-check" aria-hidden="true"></i></p>
                <span style={{display:"flex",marginLeft:"2rem"}}>Mauris sem naque</span>
            </div>
    </div>
  </div>
  
</div>
        </div>
    )
}

export default PlaneCategories
