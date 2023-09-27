import React from 'react'
import './loginSignup.css'
import email from '../assets/email.png';
import password from '../assets/password.png';
import user from '../assets/user.png';
import { useState } from 'react'

const LoginSignup = () => {
   const [action, setAction] = useState("Sign Up");

  return (
    
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==='Login'?<div></div>: <div className='input'>
            <img src={user} alt=''/>
            <input type='text' placeholder='Name' required/>
        </div>}
       
        <div className='input'>
            <img src={email} alt=''/>
            <input type='email' placeholder='Email Id' required/>
        </div>
        <div className='input'>
            <img src={password} alt=''/>
            <input type='password' placeholder='Password' required maxLength={8}/>
        </div>
      </div>
      {action==='Sign Up'?<div></div>:<div className='forgot-password'>Forgot Password? <span>Click Here!</span></div> }
      
      <div className='submit-container'>
        <div className={action==='Login'?'submit gray' : 'submit'} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==='Sign Up'? 'submit gray': 'submit'} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>

  )
}

export default LoginSignup
