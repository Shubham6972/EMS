import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Email from '../assets/email.png'
import Password from '../assets/password.png'
import Profile from '../assets/a.png';
import '../Css/Login.css'


export default function Login() {
      
  const navigate=useNavigate();
  function handleClick(){
    navigate("/option");
  } 

  const [username , setusername] = useState("");
  const [password , setpassword] = useState("");

  function loginUser() {
    fetch("http://localhost:8000/login",{
      method: "POST",
      mode:'cors',
      headers: {
        
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8000/", // Replace with the allowed domain if necessary
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response)=>{
        console.log(response);
        if(!username || !password){
          window.alert("Fill Valid Credentials")
        }
        else{
          window.alert("Login Sucessful");
          navigate('/');
        }
         
        
          
        
        
      })
      .catch((err)=>{
        console.log(err);
      })
    
}




return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={Profile} alt="profile" className="profile"/>
              </div>

            </div>

            <div>
              <h2>Login</h2>
              <div className="second">
                <img src={Email} alt="email" className="email" />
                <input 
                type="text" 
                placeholder="username" 
                className="name" 
                value={username}
                onChange={(e)=>{
                  setusername(e.target.value)
                }}
                
                />
              </div>

              <div className="second">
                <img src={Password} alt="password" className="email"/>
                <input 
                type="text" 
                placeholder="password" 
                className="name"
                value={password} 
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}

                
                />
              </div>
              <div className="login">
              <button className="login-btn" onClick={loginUser}>Login</button>
              </div>

              <div className="new-user">
                
                  New User? <br/>
                  <button type="button" className="register" onClick={handleClick}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

