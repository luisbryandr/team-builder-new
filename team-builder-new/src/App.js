import './App.css';
import { useState } from 'react';

import TeamMembers from './components/TeamMembers';

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
      <TeamMembers teamMembers={dummyTeam}/>
      

    </div>
  );
}

export default App;
