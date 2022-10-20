import { createContext, useState, useEffect, useReducer } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../util/firebase/firebase.utils';

// as the actual value i want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

})
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer = (state,action) => {
    const { type, payload} = action;

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }

}
const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE);
    const setCurrentUser=(user) =>{
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    const {currentUser} = state;

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