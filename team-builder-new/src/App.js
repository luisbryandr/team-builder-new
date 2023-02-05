import './App.css';
import { useState } from 'react';

const dummyTeam =  [
  {
    name: "Luis",
    role: "Web Developer",
    email: "luisbdominguezr@gmail.com",
    
  }
]

function App() {
  const [ teamMembers, setTeamMembers ] = useState(dummyTeam);
  const [ values, setValues ] = useState({name: '',role: '',email: ''})


  return (
    <div className="App">
      <h1>Build your Team!</h1>
      <div>
        <h3>Team Members:</h3>
        {teamMembers.map( (member,index) => {
          return (
            <div>
              <p key={index}>{member.name}</p>
              <p key={index}>{member.role}</p>
              <p key={index}>{member.email}</p>
            </div>
            
          )
        })}
      </div>
      

    </div>
  );
}

export default App;
