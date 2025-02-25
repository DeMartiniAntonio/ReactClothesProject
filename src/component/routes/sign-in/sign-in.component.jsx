import {  
    signinWithGooglePopup, 
    createUserDocumentFromAuth,      
} from "../../../utils/firebase/firebase.utils.js"
import SignUpForm from "../../sign-up-form/sign-up-form.component.jsx";

const SignIn =() =>{
    const logGoogleUser = async () =>{
        const {user} = await signinWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with google</button>        
            <SignUpForm />
        </div>
    )
}

export default SignIn;