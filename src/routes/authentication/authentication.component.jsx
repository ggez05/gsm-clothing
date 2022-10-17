
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';
const Authentication = () => {
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
    

    return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}

export default Authentication;