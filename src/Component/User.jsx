import React from 'react'
import './User.css'

function User() {
    return (
        <div className="container">
        <div className="row2">
            <div className="wrapper2">
            <div className="col2"><i class="fas fa-book" style={{width:"2rem",height:"2rem"}}></i></div>
            <span style={{display:"flex",marginLeft:"12rem"}}> 90+ <br/>User</span>

            </div>
            <div className="wrapper2">
            <div className="col2"><i class="fa fa-map-marker" aria-hidden="true"></i> </div>
            <span style={{display:"flex",marginLeft:"12rem"}}> 30+ <br/>Locations</span>
            </div>
            <div className="wrapper2">
            <div className="col2"><i class="fa fa-server" aria-hidden="true"></i></div>
            <span style={{display:"flex",marginLeft:"12rem"}}> 50+ <br/>Servers</span>

            </div>
</div>
    </div>
    )
}

export default User
