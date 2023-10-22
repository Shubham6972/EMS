import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CandidateRegister() {
  const navigate = useNavigate();

  const [fullname , setfullname] = useState("");
  const [birthdate , setbirthdate] = useState("");
  const [gender , setgender] = useState("");
  const [citizen , setcitizen] =useState("");
  const [birthplace , setbirthplace] = useState("");
  const [aadharnumber , setaadharnumber]  = useState("");
  const [partyaffiliated , setpartyaffiliated] = useState("");
  const [networth , setnetworth] = useState("");
  const [email , setemail] = useState("");
  const [username , setusername] = useState("");
  const [password , setpassword] = useState("");
  const [confirmpassword , setconfirmpassword] = useState(""); 

  function saveCandidate() {
    fetch("http://localhost:8000/candidateregister" , {
      method:"POST",
      mode:"cors",
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8000/", // Replace with the allowed domain if necessary
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        fullname,
        birthdate,
        gender,
        citizen,
        birthplace,
        aadharnumber,
        partyaffiliated,
        networth,
        email,
        username,
        password,
        confirmpassword,
      }),
    })
    .then((response)=>{
      console.log(response);
      window.alert("Sucessfully Registered");
      navigate('/login');
    })
    .catch((err)=>{
      console.log(err);
    });
  }


  return (
    <div className='reg-back'>
      <div className='reg'>
        <header>Candidate Registration</header>

        <form>
          <div className='form first'>
            <div className='details personal'>
              <span className='title'>Professional Details</span>

              <div className='fields'>
                <div className='input-field'>
                  <label htmlFor="">Full Name</label>
                  <input 
                  type="text" 
                  name="fullname"
                  placeholder="Enter Name"
                  value={fullname}
                  onChange={(e)=>{
                    setfullname(e.target.value)
                  }}
                  />
                </div>

                <div className='input-field'>
                  <label htmlFor="">Date Of Birth</label>
                  <input 
                  type="date" 
                  name="dateOfBirth"
                  placeholder="Enter Birth Date"
                  value={birthdate}
                  onChange={(e)=>{
                    setbirthdate(e.target.value)
                  }}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => {
                      setgender(e.target.value);
                      // console.log(gender);
                    }}
                    name="gender"
                    // defaultValue='male'
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="">Citizen</label>
                  <select
                    value={citizen}
                    onChange={(e) => {
                      setcitizen(e.target.value);
                      console.log(citizen);
                    }}
                    name="citizen"
                    // defaultValue='india'
                  >
                     <option value="">Select</option>
                    <option value="india">Indian</option>
                    <option value="nepal">Nepal</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="">Place of Birth</label>
                  <input
                    type="text"
                    value={birthplace}
                    onChange={(e) => {
                      setbirthplace(e.target.value);
                    }}
                    name="birthPlace"
                    placeholder="Enter Place "
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Aadhar Number</label>
                  <input
                    type="text"
                    value={aadharnumber}
                    onChange={(e) => {
                      setaadharnumber(e.target.value);
                    }}
                    name="aadharNumber"
                    placeholder="Enter Aadhar number "
                  />
                </div>

                <div className='input-field'>
                  <label htmlFor="">Party Affiliated</label>
                  <input 
                  type="text" 
                  name="affiliation"
                  placeholder="Enter Party Name"
                  value={partyaffiliated}
                  onChange={(e)=>{
                    setpartyaffiliated(e.target.value)
                  }}
                  />
                </div>

                <div className='input-field'>
                  <label htmlFor="">Net Worth</label>
                  <input 
                  type="number" 
                  name="worth"
                  placeholder="Enter Amount"
                  value={networth}
                  onChange={(e)=>{
                    setnetworth(e.target.value)
                  }}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    name="email"
                    placeholder="Enter Email "
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                    name="username"
                    placeholder="Enter Username "
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Password</label>
                  <input
                    type="pass"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    name="password"
                    placeholder="Enter Password "
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    type="pass"
                    value={confirmpassword}
                    onChange={(e) => {
                      setconfirmpassword(e.target.value);
                    }}
                    name="confirmPassword"
                    placeholder="Enter Confirm Password "
                  />
                </div>

              </div>
            </div>
          </div>
        </form>

        <button className="reg1" onClick={saveCandidate}>
          Register
        </button>
      </div>
      
    </div>
  )
}
