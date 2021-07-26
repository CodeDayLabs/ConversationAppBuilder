import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom' 
import Logo from "../Images/logo.jpg";

function Home() {
    return (
      /*<nav className='navbar active'> */
      <div className="Home">
        <h1>ConvaBuild</h1>
        <img src={Logo} className="logo" alt="logo" ></img>
        <NavLink to="/Home">
          <button class="Home">
            Home        
          </button>
        </NavLink> 
        <NavLink to="/About">
          <button class="About">
            About         
          </button>
        </NavLink> 
        <NavLink to="/Developer">
          <button class="Developer">
            Developer        
          </button>
        </NavLink> 
        <NavLink to="/User">
          <button class="User">
            User       
          </button>
        </NavLink> 
      </div>
      /*</nav>*/
    )
  }
  
  export default Home;

