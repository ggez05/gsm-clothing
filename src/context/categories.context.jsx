import { useState } from "react";
import { useEffect } from "react";
import { createContext} from "react";
import { getCategoriesAndDocuments } from "../util/firebase/firebase.utils";

//import { addCollectionAndDocuments } from "../util/firebase/firebase.utils";

//import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap : [],

});

export const CategoriesProvider = ({ children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    /* ADDING THE LIST OF PRODUCTS TO THE DATABASE ONLY ONCE SO THAT WE CAN ACCESS IT FROM THE DB
    useEffect(() => {
        addCollectionAndDocuments('categories', SHOP_DATA); // adding the list of our products to the database
    },[]);
    */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setcategoriesMap(categoryMap);
        }
        getCategoriesMap();
        
    }, [])
    const value = {categoriesMap};

    return(
        <CategoriesContext.Provider value = {value}>{children}</CategoriesContext.Provider>
    )
}


