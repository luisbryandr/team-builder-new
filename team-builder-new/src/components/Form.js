export default function Form (props) {
    const handleChange = event => {
        const { name, value } = event.target;
        /*
        The lines below do the same as the one above. above is shorthand for the ones below.
        const name = event.target.name;
        const value = event.target.value;
        */
       props.change(name, value);
    }

    const submitHandler = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={submitHandler}>
            <label>First Name:
                <input 
                    type="text"   
                    placeholder="Your name goes here"
                    onChange={handleChange}
                    value={props.values.name}
                    name="name"
                /> 
            </label>
            <label>Role:
                <input 
                    type="text"   
                    placeholder="Your role goes here"
                    onChange={handleChange}
                    value={props.values.role}
                    name="role" 
                /> 
                
            </label>
            <label>Email:
                <input 
                    type="text"   
                    placeholder="Your email goes here"
                    onChange={handleChange}
                    value={props.values.email}
                    name="email"
                /> 
            </label>
            <input type="submit" value="Create your team!" />
        </form>
    )
}