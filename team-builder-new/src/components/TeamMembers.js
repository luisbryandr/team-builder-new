export default function TeamMembers (props) {
   const teamMembers = props.teamMembers;

    return (
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
    )
}