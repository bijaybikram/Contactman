import React from 'react'
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <div>
        <header>
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="logo"><a href="/">Contact Manager</a></h1>
            </div>
                <ul className="nav-links">
                    <li><a href="/">{props.home}</a></li>
                    {/* <li><a href="/">{props.contact}</a></li> */}
                    <li><a href="/createcontact">{props.addcontact}</a></li>
                </ul>
            
        </nav>
    </header>
    </div>
  )
}

export default Navbar