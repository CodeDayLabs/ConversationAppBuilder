import React from 'react';
import './Home.css';
import blob from '../Images/blob.png';

const Home = () => {
    return (
        <div className="landing" >
            <div>
                <h1>DEVELOP AND CONNECT</h1>
                <h2>Simply upload your app and let users interact</h2>
            </div>
            <img src={blob} className="blob" alt="blob"/>
        </div>
    )
}

export default Home;
