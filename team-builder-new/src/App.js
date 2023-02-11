import './App.css';
import React, { useState } from 'react';

import TeamMembers from './components/TeamMembers';
import Form from './components/Form';


function App() {

  /* Create state variables to hold team members and hold form values 
    Create update and submit functions */
  const [ teamMembers, setTeamMembers ] = useState([]);
  const [ values, setValues ] = useState({name: '',role: '',email: ''})
  const [ memberToEdit, setMemberToEdit ] = useState();

  const editMember = (member) => {
    //when edit button clicked this function will fire
    setMemberToEdit(member)
  }

  const onSubmit  =  (e) => {
    setTeamMembers([values, ...teamMembers])
      setValues({name: '',role: '',email: ''})
  }

  const onChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
        
    })
  }

  return (
    <div className="App">
      <h1>Build your Team!</h1>
      <TeamMembers 
        teamMembers={teamMembers}
        edit={editMember}
        />
      <Form 
        values={values}
        change={onChange}
        submit={onSubmit}
        memberToEdit={memberToEdit}
        />
      

    </div>
  );
}

export default App;
