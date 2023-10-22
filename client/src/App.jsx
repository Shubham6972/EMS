import React from 'react'
import {Route,Routes} from 'react-router-dom';
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

export default function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path  = '/about' element={<About/>}/>
        <Route path  = '/news' element={<News/>}/>
        {/* <Route path  = '/election' element={<Election/>}/> */}
        <Route path  = '/candidates' element={<Candidates/>}/>
        <Route path  = '/login' element={<Login/>}/>
        <Route path  = '/register' element={<Register/>}/>
        <Route path = '/option' element = {<Option/>}/>
        <Route path = '/candidateregister' element = {<CandidateRegister/>}/>
      </Routes> 
    <Footer/>   
    </>
  )
}

