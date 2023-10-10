import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Css/Register.css'


export default function Register() {
  const navigate = useNavigate();

  const [voter , setVoter] = useState({
    fullName:"" , dateOfBirth:"" , gender:"" , phone:"" , email:"" , citizen:"" , aadharNumber:"" , birthPlace:"" , username:"" , password:"" , confirmPassword:""
  });

  let name,value;
  const handleInput = (e) =>{
      name = e.target.name;
      value = e.target.value;

      setVoter({...voter , [name]:value});
  }

  const PostData = async(e)=>{
      e.preventDefault();

      const {fullname,dateOfBirth,gender,phone,email ,citizen,aadharNumber,birthPlace,username,password,confirmPassword} = voter;

      const res = await fetch('/register' , {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
          fullname,dateOfBirth,gender,phone,email,citizen,aadharNumber,birthPlace,username,password,confirmPassword
        })
      });

      const data = await res.json();

      if (data.status === 422 || !data){
        window.alert("Registration Failed");
        console.log("Registration Failed");
      } else {
        window.alert("Registration Successfull");
        console.log("Registration Successfull");

       navigate("/login");
      }
  }


  return(
  <div className="reg-back"> 
    <div className='reg'>
      <header>Registration</header>

      <form method="POST">
        <div className="form first">
          <div className="details personal">
           <span className='title'>Personal Details</span>

           <div className="fields">
            <div className="input-field">
              <label htmlFor="">Full Name</label>
              <input 
              type="text"  
              name="fullName" 
              placeholder='Enter Name' 
              value={voter.fullName}
              onChange={handleInput}
              />
            </div>

            <div className="input-field">
              <label htmlFor="">Date Of Birth</label>
              <input type="date" 
              name="dateOfBirth" 
              placeholder='Enter Birth date'
              value={voter.dateOfBirth}
              onChange={handleInput} 
              />
            </div>

            <div className="input-field">
              <label htmlFor="">Gender</label>
              <select 
              name="gender" 
              id="gender"
              value={voter.gender}
              onChange={handleInput}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="">Contact Number</label>
              <input type="tel" 
              name="phone" 
              placeholder='Enter Contact Number '
              value={voter.phone}
              onChange={handleInput} 
              />
            </div>  

            <div className="input-field">
              <label htmlFor="">Email</label>
              <input type="email" 
              name="email" 
              placeholder='Enter Email '
              value={voter.email}
              onChange={handleInput}
              />
            </div>

            <div className="input-field">
              <label htmlFor="">Citizen</label>
              <select 
              name="citizen" 
              id="citizen"
              value={voter.citizen}
              onChange={handleInput}>
                <option value="india">Indian</option>
                <option value="nepal">Nepal</option>
                <option value="bhutan">Bhutan</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="">Aadhar Number</label>
              <input type="text" 
              name="aadharNumber" 
              placeholder='Enter Aadhar number '
              value={voter.aadharNumber}
              onChange={handleInput}/>
            </div>

            <div className="input-field">
              <label htmlFor="">Place of Birth</label>
              <input type="text" 
              name="birthPlace" 
              placeholder='Enter Place ' 
              value={voter.birthPlace}
              onChange={handleInput}
              />
            </div>

            <div className="input-field">
              <label htmlFor="">Username</label>
              <input type="text" 
              name="username" 
              placeholder='Enter Username '  
              value={voter.username}
              onChange={handleInput}
              />
            </div>

            <div className="input-field">
              <label htmlFor="">Password</label>
              <input type="pass" 
              name="password" 
              placeholder='Enter Password '
              value={voter.password}
              onChange={handleInput}
              />
            </div>

            <div className="input-field">
              <label htmlFor="">Confirm Password</label>
              <input type="pass" 
              name="confirmPassword" 
              placeholder='Enter Confirm Password ' 
              value={voter.confirmPassword}
              onChange={handleInput}
              
              />
            </div> 
           </div>
          </div>
        </div>
      </form>
      <input type="submit" className='reg1' onClick={PostData}/>
      {/* <button className='reg1' onClick={PostData}>Register</button> */}
    </div>
    </div>   
  )
  }

