import './App.css';
import Home from './Home';
import { HashRouter as Router, Route } from 'react-router-dom'
import Developer from './Developer';
import User from './User';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/developer" component={Developer} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}

export default App;
