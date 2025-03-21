import React from 'react'
import { useState } from 'react';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div className='container'>
        <div className='input'>
                            <img src={email_icon} alt=''/>
                            <input 
                                type='email' 
                                placeholder='Email ID' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
        
                        <div className='input'>
                            <img src={password_icon} alt=''/>
                            <input 
                                type='password' 
                                placeholder='Password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
      
    </div>
  )
}

export default Signup
// <div className='forgot-password'>Forgot Password? <span>Click here</span></div>

