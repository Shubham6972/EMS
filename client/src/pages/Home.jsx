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

    <section>
        
    </section>
    </>
  )
}
