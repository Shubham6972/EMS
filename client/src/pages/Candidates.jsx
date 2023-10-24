import React, { useEffect , useState} from 'react'
import '../Css/Candidates.css';
import UserData from '../components/UserData';
const API = "http://localhost:8000/candidates";

export default function Candidates({userData}) {

  // const [data,setData] = useState([]);

  // useEffect(()=>{
  //   fetch("http://localhost:8000/candidates",{
  //     method:"GET",
  //   })
  //   .then((res) =>res.json())
  //   .then((data)=>{
  //     console.log(data,"userData");
  //     setData(data.data);
  //   })
  // },[])

  const [users , setUsers]=useState([]);

  const fetchUsers=async(url)=>{
      try{
        const res =  await fetch(url);
        const data = await res.json();
        if(data.length>0){
          setUsers(data);
        }
        console.log(data);
      }
      catch(err){
        console.log(err);
      }
      
  }

  useEffect(()=>{
      fetchUsers(API);
  },[])
  return (
    <>
    <div className='back'>
      <div className='reg'>
      <table className='table'>
        <thead>
          <tr>
          <th>Name</th>
          <th>Party</th>
          </tr>
          
        </thead>

        <tbody>
          
          {/* <UserData users={users}/> */}
          {

    
users.map((curUser)=>{
const { _id,fullname , partyaffiliated} = curUser;

return(
    <tr key = {_id}>
        <td>{fullname}</td>
        <td>{partyaffiliated}</td>
    </tr>
)
})
}
        </tbody>
      </table>
      </div>
    </div>
    
  
    </>
  )
}
