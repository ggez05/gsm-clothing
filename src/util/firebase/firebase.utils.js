// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    connectFirestoreEmulator,
} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcCyKc6EGW-HUsMV_bt8hcSRBZoL_fdOA",
    authDomain: "clothing-store-2d2e2.firebaseapp.com",
    projectId: "clothing-store-2d2e2",
    storageBucket: "clothing-store-2d2e2.appspot.com",
    messagingSenderId: "850699169484",
    appId: "1:850699169484:web:b1ff89b50894b4bfc45c69"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef); // allows to check whether an instance exists and also allows to get the data
    console.log(userSnapshot);
    console.log(userSnapshot.exists()); //to check if the data actually exists for user in the database if no data is available create one in the db

    // if user data does not exists 
    // we create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth; // get the name and email from userAuth
        const createdAT = new Date;
        try{
            await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAT
            }); // setting the document in db
        }catch{
            console.log('error creating the user' , Error.message);
        }

    }
    // if user data already exists 
    return userDocRef;





};


