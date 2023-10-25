import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom';
import '../Css/Profile.css'

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout=()=>{
      
      localStorage.removeItem('token');
      window.alert("Thanks For Visiting")
      navigate('/')
      
      
  }
  return (
    <div className='reg-back'>
      <div className='reg'>
        <header>Thanks For Visiting</header>

        <div className='form first'>
          <div className='btn'>
            <button className='primary-btn' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
