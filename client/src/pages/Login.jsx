import React from 'react'
import '../Css/Login.css'
import Email from '../assets/email.png'
import Password from '../assets/password.png'
import Person from '../assets/person.png'
import Profile from '../assets/a.png'
import { useNavigate } from 'react-router-dom'

export default function Login() {
      
  const navigate=useNavigate();
  function handleClick(){
    navigate("/register");
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
                <input type="text" placeholder="username" className="name" />
              </div>

              <div className="second">
                <img src={Password} alt="password" className="email"/>
                <input type="text" placeholder="password" className="name" />
              </div>
              <div className="login">
              <button className="login-btn">Login</button>
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

