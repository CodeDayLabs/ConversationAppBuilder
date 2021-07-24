import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom' 

function Home() {
  return (
    <div className="Home">
      <h1>ConvaBuild</h1>
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
  )
}

export default Home;