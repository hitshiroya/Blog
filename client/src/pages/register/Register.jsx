import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css';

export const Register = () => {
  return (
    <div className='login'>
    <h2 className='login_title'>Register</h2>
      <form  className="loginform">
          <label >Username</label>
          <input type="text" className='login_input' />
          <label >Email</label>
          <input className='login_input' type="email" />
          <label >Password</label>
          <input className='login_input' type="password" />
          <button className='loginbtn' type='submit'>Login</button>
      </form>
      <button className='regbtn' type='submit'>
        <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link>
      </button>
  </div>
  )
}
