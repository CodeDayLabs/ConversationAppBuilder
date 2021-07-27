import React from 'react';
import './Home.css';
import main from '../Images/main.png';

const Home = () => {
    return (
        <div className="home">
          <img src={main} className="main" alt="main"/>
           <h1>Home Page</h1> 
        </div>
    )
}

export default Home;