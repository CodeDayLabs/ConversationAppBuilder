import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom' 

function Home() {
  return (
    <div className="Home">
      <h1>conversational app builder</h1>
      <NavLink to="/developer">
        <button class="developer">
        Developer        
        </button>
      </NavLink> 
      <NavLink to="/user">
        <button class="user">
        User        
        </button>
      </NavLink> 
    </div>
  )
}

export default Home;