import './User.css'
import { NavLink } from 'react-router-dom' 

function User() {
  return (
    <div className="User">
      <h1>User</h1>
      <NavLink to="/">
        <button class="home">
          Home        
        </button>
      </NavLink>
      
    </div>
  )
}

export default User;