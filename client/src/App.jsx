import React, { useEffect, useState } from 'react'
import {Route,Routes, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
// import Election from'./pages/Election';
import Candidates from './pages/Candidates';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import Header from './components/Header';
import Option from './pages/Option';
import CandidateRegister from './pages/CandidateRegister';
// import Blogs from './pages/Blogs';
// import Updates from './pages/ElectionUpdates';
import Profile from './pages/Profile'

export default function App() {

  const navigate = useNavigate();

  const [token , settoken] = useState('');

  useEffect(()=>{
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      settoken(storedToken);
    }
  },[])

  const handleLogin = (token) => {
    settoken(token);
    localStorage.setItem('token', token);
  };
  return (
    <>
    <Header token={token}/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path  = '/about' element={<About/>}/>
        <Route path  = '/news' element={<News/>}/>
        {/* <Route path  = '/election' element={<Election/>}/> */}
        <Route path  = '/candidates' element={<Candidates/>}/>
        {/* <Route path  = '/login' element={<Login/>}/> */}
        {/* <Route path = '/login' element={token?(
          <Profile token={token}/>
        ):(
          <Login/>
        )}/> */}
        <Route path  = '/login' element={<Login/>}/>
        <Route path  = '/register' element={<Register/>}/>
        <Route path = '/option' element = {<Option/>}/>
        <Route path = '/candidateregister' element = {<CandidateRegister/>}/>
        {/* <Route path= '/profile'>
        {token ? (
              <Profile token={token}/>
            ) : (
              navigate('/login')
            )}
        </Route> */}
        <Route path = '/profile' element = {<Profile/>}/>
      </Routes> 
    <Footer/>   
    </>
  )
}

