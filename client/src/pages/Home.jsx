import React from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../assets/img_1.png'
import '../Css/Home.css';

export default function Home() {

    const navigate=useNavigate();
    function handleClick(){
      navigate("/login");
    }  


  return (
    <>
    <header className='header'>
      <div className='container header-section flex'> 
        <div className="header-left">
          <h2>Empowering Democracy One Click at a Time</h2>
          <p>Manage Your Elections the Best Way</p>
          <button type="button" className='primary-btn' onClick={handleClick}>Get Started</button>
        </div>

        <div className='header-right'>
            <img src= {Image} />
        </div>
      </div>
    </header>

    <div className="heading">
      <h2>Our Services</h2>
    </div>

    <div className="container">
     
      <div className="box-container">
        <div className="box">
            
            <h3>Voter Registration</h3>
            <p>User-friendly platform which allows eligible voters to register easily, update voter information, and verify their eligibility.</p>
            
        </div>

        <div className="box">
            
            <h3>Candidate Registration</h3>
            <p>Eligible Candidates can register for upcoming elections and get their candidature secured and update their profile and candidature form.</p>
            
        </div>

        <div className="box">
            
            <h3>Candidate Information</h3>
            <p>Registered Voters can view the profile of candidates they are gong to vote in upcoming election and choose the best candidate.</p>
        </div>

        <div className="box">
            
            <h3>News Portal</h3>
            <p>Get Real time updates of election dates and polling stations and code of conduct at one click through our well designed news portal.</p>
            
        </div>

        <div className="box">
            
            <h3>Member Information</h3>
            <p>Get Information about the current MLAs in the state assembly through our election portal and view their profiles and performance in the assembly.</p>
           
        </div>

        <div className="box">
            
            <h3>Code Of Conduct</h3>
            <p>Read election laws and code of conduct to be followed by candidates and voters to keeep themselves safe from any type of irregular practices.</p>
            
        </div>

      </div>
    </div>

   

    </>
  )
}
