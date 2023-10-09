import React,{useEffect, useState} from 'react'
import '../Css/Register.css'

export default function Register() {
  return(
  <div className="reg-back"> 
    <div className='reg'>
      <header>Registration</header>

      <form action="">
        <div className="form first">
          <div className="details personal">
           <span className='title'>Personal Details</span>

           <div className="fields">
            <div className="input-field">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder='Enter Name' required />
            </div>

            <div className="input-field">
              <label htmlFor="">Date Of Birth</label>
              <input type="date" placeholder='Enter Birth date' required/>
            </div>

            <div className="input-field">
              <label htmlFor="">Gender</label>
              <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="">Contact Number</label>
              <input type="tel" placeholder='Enter Contact Number ' required/>
            </div>  

            <div className="input-field">
              <label htmlFor="">Email</label>
              <input type="email" placeholder='Enter Email ' required />
            </div>

            <div className="input-field">
              <label htmlFor="">Citizen</label>
              <select name="citizen" id="citizen">
                <option value="india">Indian</option>
                <option value="nepal">Nepal</option>
                <option value="bhutan">Bhutan</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="">Aadhar Number</label>
              <input type="text" placeholder='Enter Aadhar number ' required/>
            </div>

            <div className="input-field">
              <label htmlFor="">Place of Birth</label>
              <input type="text" placeholder='Enter Place ' required />
            </div>

            <div className="input-field">
              <label htmlFor="">Username</label>
              <input type="text" placeholder='Enter Username ' required />
            </div>

            <div className="input-field">
              <label htmlFor="">Password</label>
              <input type="pass" placeholder='Enter Password ' required />
            </div>

            <div className="input-field">
              <label htmlFor="">Confirm Password</label>
              <input type="pass" placeholder='Enter Confirm Password ' required/>
            </div> 
           </div>
          </div>
        </div>
      </form>

      <button className='reg1'>Register</button>
    </div>
    </div>   
  )
  }

