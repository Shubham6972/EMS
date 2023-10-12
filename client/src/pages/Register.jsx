import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setfullName] = useState("");
  const [dateOfBirth, setdataOfBirth] = useState("");
  const [gender, setgender] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [citizen, setcitizen] = useState("");
  const [aadharNumber, setaadharNumber] = useState("");
  const [birthPlace, setbirthPlace] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  function saveVoter() {
    console.log(gender);
    fetch("http://localhost:8000/register", {
      method: "POST",
      mode:'cors',
      headers: {
        
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8000/", // Replace with the allowed domain if necessary
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        fullName,
        dateOfBirth,
        gender,
        phone,
        email,
        citizen,
        aadharNumber,
        birthPlace,
        username,
        password,
        confirmPassword,
      }),
    })
      .then((response) => {
        console.log(response);
        window.alert("clicked");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="reg-back">
      <div className="reg">
        <header>Registration</header>

        <form>
          <div className="form first">
            <div className="details personal">
              <span className="title">Personal Details</span>

              <div className="fields">
                <div className="input-field">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setfullName(e.target.value);
                    }}
                    name="fullName"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Date Of Birth</label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => {
                      setdataOfBirth(e.target.value);
                    }}
                    name="dateOfBirth"
                    placeholder="Enter Birth date"
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => {
                      setgender(e.target.value);
                      console.log(gender);
                    }}
                    name="gender"
                    defaultValue='male'
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="">Contact Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }}
                    name="phone"
                    placeholder="Enter Contact Number "
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
                  <label htmlFor="">Citizen</label>
                  <select
                    value={citizen}
                    onChange={(e) => {
                      setcitizen(e.target.value);
                      console.log(citizen);
                    }}
                    name="citizen"
                    defaultValue='india'
                  >
                     <option value="">Select</option>
                    <option value="india">Indian</option>
                    <option value="nepal">Nepal</option>
                    <option value="bhutan">Bhutan</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="">Aadhar Number</label>
                  <input
                    type="text"
                    value={aadharNumber}
                    onChange={(e) => {
                      setaadharNumber(e.target.value);
                    }}
                    name="aadharNumber"
                    placeholder="Enter Aadhar number "
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="">Place of Birth</label>
                  <input
                    type="text"
                    value={birthPlace}
                    onChange={(e) => {
                      setbirthPlace(e.target.value);
                    }}
                    name="birthPlace"
                    placeholder="Enter Place "
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
                    value={confirmPassword}
                    onChange={(e) => {
                      setconfirmPassword(e.target.value);
                    }}
                    name="confirmPassword"
                    placeholder="Enter Confirm Password "
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <input type="submit" className='reg1'/> */}

        <button className="reg1" onClick={saveVoter}>
          Register
        </button>
      </div>
    </div>
  );
}
