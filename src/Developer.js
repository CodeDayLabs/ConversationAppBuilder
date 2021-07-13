import './Developer.css'
import { NavLink } from 'react-router-dom' 

function Developer() {
  return(
    <div className="Developer">
      <h1>developer</h1>
      <NavLink to="/">
        <button class="home">
        Home        
        </button>
      </NavLink> 
    </div>
  )
}

export default Developer;