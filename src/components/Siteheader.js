import React from 'react'
// import { Link } from 'memfs/lib/node';
import { Link } from 'react-router-dom';
import HeaderLogo from '../assets/images/pitman-logo.png'


function Siteheader() {
  return (
    <div>
        <header className="header">
          <div className="container">
              <div className="header-inner-wrap">
                <Link to="/Path" className="logo"> 
                    <img src={HeaderLogo} alt="Pitman" />
                 </Link>  
          
                <ul className="header-nav">
                  <li className="nav-item">
                  <Link to="/Path" title="Courses"> 
                      Courses
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Path" title="Timeline"> 
                        Timeline
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Path" title="Reviews"> 
                  Reviews
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Path" title="Categories"> 
                    Categories
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Path" title="Top 10 Reasons"> 
                      Top 10 Reasons
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Path" title="Career"> 
                      Career
                  </Link>
                  </li>
                 </ul>
                 <span className="call-link">Call us:<a href="/" title=" 01937 865709"> 01937 865709</a></span>
                 
              </div>
          </div>
        </header>
    </div>
  )
}

export default Siteheader
