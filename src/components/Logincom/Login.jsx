import React, { useState } from 'react';
import './Loginsign.css';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import users_icon from '../Assets/person.png';

const Login =()=> {
    const [action, setAction] = useState("Sign Up");
    
    const [type,settype] = useState("user");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlechange = (e)=> {
        settype(e.target.value);
    }
    console.log(type)
    
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

                {action !== "Login" && (
                    <>
                   <div className='input'>
                        <img src={users_icon} alt=''/>
                        <input 
                            type='text' 
                            placeholder='Name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
                    <div >
                        <select className='input' value = {type} onChange={handlechange} style={{paddingLeft:"42%" }}>
                            <option value='user'>User</option>
                            <option value='restaurant'>Restaurant</option>
                            <option value='admin'>admin</option>
                        </select>
                </div>
                </>
                )}

                

                <div className='logbut'>
                    <button>Register</button>                    
                </div>
               
            </div>
        </div>
    );
}

export default Login;


{/* <div 
                        className={action === "Sign Up" ? "submit" : "submit gray"} 
                        onClick={() => {
                            setAction("Sign Up");
                            handleSubmit();
                        }}
                    >
                        Sign Up
                    </div> */}