import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar';
import Developer from './Pages/Developer';
import About from './Pages/About';
import User from './Pages/User';

function App() {
  return (
      <Router>
         <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/" exact component={About} />
            <Route path="/developer" exact component={Developer} />
            <Route path="/user" exact component={User} />
           </Switch>
           </div>
      </Router>
  );
}

export default App;

