import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../util/firebase/firebase.utils';

// as the actual value i want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    

    useEffect(() => {
        const unsub =  onAuthStateChangedListener((user) => {
            //console.log(user);
            if (user) { // create user document if the user is not null , if a user is signed in 
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user); // set the current user to user , at if the user signes out we will have null in user or else the object (user ) itself 
            
        });
        return unsub;
    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}