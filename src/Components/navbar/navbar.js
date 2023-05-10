// import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'

import './navbar.css'


const Navbar = () => {
  // const [showNavbar, setShowNavbar] = useState(false)

  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar)
  // }

  return (
    <>
    <div className='container-fluid nav_bg-light'>
        <div className='row'>
            <div className='col-10 mx-auto'>

     <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Stock Trading</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Featured">Featured</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Market
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/Market">Market</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Contact">Contact</NavLink></li>
         
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/News">News</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/About">About</NavLink></li>
            <li><NavLink className="dropdown-item" to="/Contact">Contact</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/Faqs">Faqs</NavLink></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link disabled">Disabled</NavLink>
        </li> */}
      </ul>

      <div className="nav-item me-2 mb-2 mb-lg-0">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </div>
        <div className="nav-item me-5">
          <NavLink className="nav-link" to="#">Register</NavLink>
        </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
</div>
        </div>
    </div>
</>
  );
}

export default Navbar