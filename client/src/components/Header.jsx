import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='logo'>
          <h1>
            ELECTION
          </h1>
        </div>

        <div className = 'nav-elements'>
          <ul>
            <li><Link to='/' className='hover-links'><h3>Home</h3></Link></li>
            <li><Link to='/about'className='hover-links' ><h3>About</h3></Link></li>
            <li><Link to='/news' className='hover-links'><h3>News</h3></Link></li>
            {/* <li><Link to='/election'className='hover-links' ><h3>Election</h3></Link></li> */}
            <li><Link to='/candidates'className='hover-links' ><h3>Candidates</h3></Link></li>
            <li><Link to='/login' className='hover-links secondary-btn' ><h3>Login</h3></Link></li>
            <li><Link to='/option' className=' hover-links' ><h3>Register</h3></Link></li>
            
          </ul>
        </div>
        </div>
      </nav>
    </>    
  )
}
