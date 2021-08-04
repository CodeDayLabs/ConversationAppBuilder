import React from 'react';
import './Home.css';
import main from '../Images/main.png';

const Home = () => {
    return (
        <div className="home">
          <img src={main} className="main" alt="main"/>
        </div>
    )
}

export default Home;