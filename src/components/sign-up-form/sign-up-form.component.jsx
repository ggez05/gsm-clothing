
import { useState } from "react";
import { createAuthUderWithEmailAndPassword, createUserDocumentFromAuth } from "../../util/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'; 
import Button from "../button/button.component";

const defaultFormFields = { // to track the values of the fields 
    displayName: '',
    email: '',
    password: '',
    confirmpassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmpassword} = formFields;

    console.log(formFields);
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmpassword){
            alert("Passwords Do not Match!");
            return;
        }
        try{
            const {user} = await createAuthUderWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

            
        }catch(err) {
            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot Create User , Email already in use!');
            }
            console.log('User creating encountered an error ! Try again ',err);
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
        //          ... -> spead in the form fields and [name] modify the value of this 
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account yet?</h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={handleSubmit}>

            
                <FormInput 
                label="Display Name"
                type="text" 
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName} />

                
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

                
                <FormInput 
                label="Confirm Password"
                type="password" 
                required onChange={handleChange} 
                name="confirmpassword" 
                value={confirmpassword} />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );


}

export default SignUpForm;