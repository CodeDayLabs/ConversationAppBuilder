import './User.css'

function User() {
  return (
    <div className="User">
      <div className="categories">
        <button>Category</button> 
        <button>Category</button> 
        <button>Category</button> 
        <button>Category</button> 
        <button>Category</button> 
      </div>
      <div className="options">
        <p>Name of Program</p>
        <button>Select</button> 
      </div> 
      <input></input>
      <div className="output">
        Ouput to question.
      </div>
    </div>
  )
}

export default User;
