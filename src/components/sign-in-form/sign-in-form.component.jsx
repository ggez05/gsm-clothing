
import { useState } from "react";
import { signInWithGooglePopup} from "../../util/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'; 
import Button from "../button/button.component";
import { signInUserWithEmailAndPassword } from "../../util/firebase/firebase.utils";

const defaultFormFields = { // to track the values of the fields 
    email: '',
    password: '',

}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

   
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInUserWithEmailAndPassword(email, password);
            resetFormFields();

            
        }catch(err) {

            switch (err.code) {
                case "auth/wrong-password":
                    alert('Incorrect Password for email!');
                    break;
                case "auth/user-not-found":
                    alert('Email does not exist!');
                    break;
                default:
                    break;
            }
            console.log(err);
        }
    };

    const signInWithGoogle  = async () => {
        await signInWithGooglePopup();
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
        //          ... -> spead in the form fields and [name] modify the value of this 
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an Account?</h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                label="Email"
                type="email" 
                required 
                onChange={handleChange} 
                name = "email" 
                value={email} />

                
                <FormInput 
                label="Password"
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type = 'button'buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    );


}

export default SignInForm;