import { useState } from "react";

const defaultFormFields ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFIelds, setFormFields]=useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFIelds;

    const handleChange=(event) =>{
        const {name, value} =event.target;

        setFormFields({...formFIelds, [name]: value});
    }

    return(
        <div>
            <h1> 
                Sign up with email and password
            </h1>
            <form onSubmit ={() => {}}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email}/>

                <label>Password</label>
                <input  type="password" required onChange={handleChange} name="password" value={password}/>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="cinfirmPassword" value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default SignUpForm;