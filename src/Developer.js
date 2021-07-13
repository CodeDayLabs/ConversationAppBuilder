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
      <div className="uploadFile"> 
        <input type="file"/> 
        <button class="upload"> 
          Upload! 
        </button> 
      </div>  
    </div>
  )
}

export default Developer;