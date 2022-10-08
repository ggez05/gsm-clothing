
import { signInWithGooglePopup } from "../../util/firebase/firebase.utils";
import {createUserDocumentFromAuth,  } from "../../util/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
// for redirect sign in 
/*
    useEffect( () => {
        async function fetchData(){
            const response = await getRedirectResult(auth);
            if(response){
                const userDofRef = await createUserDocumentFromAuth(response.user);
            }
        }    
        fetchData();
    }, []) // empty array means call it once
*/
    const loggoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDofRef = await  createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={loggoogleUser}>Sign In with Google PopUp</button>
            <SignUpForm/>
        </div>
    );
}

export default SignIn;