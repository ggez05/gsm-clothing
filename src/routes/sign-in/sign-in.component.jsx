import { signInWithGooglePopup } from "../../util/firebase/firebase.utils";
import { createUserDocumentFromAuth  } from "../../util/firebase/firebase.utils";

const SignIn = () => {
    const loggoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
       
        const userDofRef = await  createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={loggoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default SignIn;