import React, { useState } from 'react';
import './Loginsign.css';
import users_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/person.png';

const Login =()=> {
    const [action, setAction] = useState("Sign Up");
    
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleSubmit = () => {
        if (action === "Sign Up") {
            console.log("Signing Up:", { name, email, password });
        } else {
            console.log("Logging In:", { email, password });
        }

        
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>

                {action !== "Login" && (
                    <div className='input'>
                        <img src={users_icon} alt=''/>
                        <input 
                            type='text' 
                            placeholder='Name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}

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

                <div className='forgot-password'>Forgot Password? <span>Click here</span></div>

                <div className='submit-container'>
                    <div 
                        className={action === "Login" ? "submit" : "submit gray"} 
                        onClick={() => {
                            setAction("Login");
                            handleSubmit();
                        }}
                    >
                        Login
                    </div>
                    <div 
                        className={action === "Sign Up" ? "submit" : "submit gray"} 
                        onClick={() => {
                            setAction("Sign Up");
                            handleSubmit();
                        }}
                    >
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
