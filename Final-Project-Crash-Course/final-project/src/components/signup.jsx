import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div>
        <div className="login-main" >
        <h1>SIGN UP PAGE</h1>
        <form action="#" style={{width:"70%" , margin:"auto" , textAlign:"center" }}>
           <input type="text" placeholder='Full Name' />
           <input type="number" placeholder='Mobile Number' />
          <input 
            type="email"
            name="email"
            id="email"
            placeholder="Email ID"
          />
          <input 
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input 
            type="confirmpassword"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
          />
         
         <button><li><Link to="/login" > SIGN UP </Link></li></button>
         
        </form>
      </div>
      
    </div>
  )
}

export default Signup
