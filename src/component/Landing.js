import "../css/Landing.css"
  import React from 'react'
import { Link } from "react-router-dom"
  
  const landing = () => {
    return (
      <div className="landing">
        <div className="mask">
        <img className="background-img" src="/img/Group 5.png" alt="img"/>
        </div>
        <div className="content">
            <p>Hi,I'm Aman krishan.</p>
            <h1>React developer</h1>
            <div>
                <Link to="/project" className="btnn">Project</Link>
            </div>
        </div>
      </div>
    )
  }
   
  export default landing