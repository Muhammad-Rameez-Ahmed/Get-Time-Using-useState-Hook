import React from 'react'
import Hello from './Hello'

const Navbar = (props) => {
 

  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">useState-Hook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Date: {props.today_Date}</a>
              </li>
     
    </ul>
  </div>
</nav>

        
    </div>
    </>
  )
}

export default Navbar