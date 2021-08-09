import React from 'react';
import './Home.css';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
    return (
        <div className="landing" >
            <div>
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Open Sans'}}
            startDelay={100}
            cursorColor="cyan"
            text="DEVELOP AND CONNECT"
            typeSpeed={120}
          />
            <TypeWriterEffect
            textStyle={{ fontFamily: 'Open Sans', fontSize: 29}}
            startDelay={2400}
            cursorColor="cyan"
            text="Upload your app and let users interact!"
            typeSpeed={120}
          />
            </div>
        </div>
    )
}

export default Home;
