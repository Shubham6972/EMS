import React from 'react'
import {Link} from 'react-router-dom';
// import Image from '../assets/person.png'
import './Header.css'

export default function Header({token}) {

 
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
            <li><Link to='/' ><h3>Home</h3></Link></li>
            <li><Link to='/about' ><h3>About</h3></Link></li>
            <li><Link to='/news' ><h3>News</h3></Link></li>
            {/* <li><Link to='/election'className='hover-links' ><h3>Election</h3></Link></li> */}
            {/* <li><Link to='/candidates' ><h3>Candidates</h3></Link></li> */}
            
            <li>
            {token ? (
              <Link to='/candidates'><h3>Candidates</h3></Link>
            ) : (
              <Link to='/login'><h3>Candidates</h3></Link>
            )}
          </li>
            
            <li><Link to='/login' ><h3>Login</h3></Link></li>
            <li><Link to='/option'><h3>Register</h3></Link></li>
            <li>
            {token ? (
              <Link to="/profile"><h3>Logout</h3></Link>
            ) : (
              <Link to="/login"></Link>
            )}
          </li>

            
          </ul>
        </div>
        </div>
      </nav>
    </>    
  )
}
