export default function TeamMembers (props) {
   const teamMembers = props.teamMembers;
   const handleEditButton = (e) => {
      
      e.preventDefault();

      console.log(e)
      props.edit(e.target);
      
   }
    return (
        <div>
        <h3>Team Members:</h3>
        {teamMembers.map( (member,index) => {
          return (
            <div key={index} >
              {member.name}, {member.role}, {member.email}
              <button onClick={handleEditButton} >Edit Member</button>
            </div>
            
          )
        })}
      </div>
    )
}