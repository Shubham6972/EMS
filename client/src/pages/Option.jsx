import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Option.css'

export default function Option() {
  const navigate = useNavigate();
  function handleVoter(){
    navigate('/register')
  }
  function handleCandidate(){
    navigate('/candidateregister')
  }
  return (
    <div className='op-back'>
      <div className='op'>
        <header>Select Your Role</header>

        <form>
          <div className='op fir'>
            <div className='in-1'>
              
              <input type="radio" name="radio" id="voter" className='check' onClick={handleVoter} />
              <label htmlFor="">Voter</label>
            </div>

            <div className='in-1'>
              
              <input type="radio" name="radio" id="candidate" className='check' onClick={handleCandidate}/>
              <label htmlFor="">Candidate</label>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  )
}
