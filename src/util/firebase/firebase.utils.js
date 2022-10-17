// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

const Googleprovider = new GoogleAuthProvider(); // google provider

Googleprovider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, Googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, Googleprovider);
export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db); // creating a batch instance for succesfful interaction between our frontend and the database
    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase()); // getting the doc reference
        batch.set(docRef, object); // creating new document reference for each of the value
    }); 

    await batch.commit();
    console.log("done");
}


export const getCategoriesAndDocuments =  async () => {
    const collectionRef = collection(db, 'categories'); // we made the categoreis in the firebase db
    // generating an query and getting the documents from the db (firestore)
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q); // getting the documents , the snapshots
    const categoryMap = querySnapshot.docs.reduce((acc , docSnapshot)=> {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})

    return categoryMap;

}



export const createUserDocumentFromAuth = async (
    userAuth , 
    additionalInformation = {} 
    ) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef); // allows to check whether an instance exists and also allows to get the data
    // create snapshot so we can get the prev data (ex - if any cart items , whishlists) of the user
    //console.log(userSnapshot.exists()); //to check if the data actually exists for user in the database if no data is available create one in the db

    // if user data does not exists 
    // we create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){ // if new user , or no snap shot of user already exists
        const { displayName, email } = userAuth; // get the name and email from userAuth
        const createdAT = new Date();
        try{
            await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAT,
                    ...additionalInformation,
            }); // setting the document in db
        }catch{
            console.log('error creating the user' , Error.message);
        }

    }
    // if user data already exists 
    return userDocRef;

};
export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const createAuthUderWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

//the sign out method
export const SignOutUser = async () => await signOut(auth);


export const onAuthStateChangedListener = (callback) => {
    
    onAuthStateChanged(auth, callback);
}





