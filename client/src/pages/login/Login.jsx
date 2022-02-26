import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
export const Login = () => {
  return (
    <div className='login'>
      <h2 className='login_title'>Login</h2>
        <form  className="loginform">
            <label >Email</label>
            <input className='login_inout' type="email" />
            <label >Password</label>
            <input className='login_inout' type="password" />
            <button className='loginbtn' type='submit'>Login</button>
        </form>
        <button className='regbtn' type='submit'>
          <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>SignUp</Link>
        </button>
    </div>
  )
}
