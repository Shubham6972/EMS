import React from 'react'
import { useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

  const {pathname} = useLocation();
  if(pathname === '/option' || pathname === '/candidates' || pathname === '/profile'){
    return null;
  }
  return (
   <>
    <div className="footer">
      <h4>Copyright&copy2023; Reserved By ELECTION</h4>
    </div>
   </>
  )
}
