import { createContext , useReducer } from "react";


const addCartItem = (cartItems, productToAdd) => {
   
    // find if cartitems already contains the product to add
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id); // getting the cartItem if it exists aready
    // if that is found increment the quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?{...cartItem, quantity: cartItem.quantity+1} : cartItem);
    }
    // return new array with new cart items 
    return [...cartItems, { ...productToAdd , quantity: 1}]; // making new cart item with additional quantity as 1
}
const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingValue = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);  
    if(existingValue.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id); // removing the product as the quantity will be 0 
    }
    
    if (existingValue) {
        return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
    }

}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id); // removing the product
    
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0
});

const INITIAL_STATE = {
    cartItem: [],
    isCartOpen: true,
    cartCount: 0,
    cartTotal: 0,
}



const cartReducer = (state,action) => {
    const {type,payload} = action;

    switch(type){
        case 'ADD_TO_CART':
                return{
                    ...state, 
                    ...payload
                }
        default:
            throw new Error(`Unhandled type of ${type} in cart reducer`);
    }
}



export const CartProvier = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const[cartCount , setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    // useEffect(()=>{
    //     const newCartCount = cartItems.reduce((total, cartItem)=> total+cartItem.quantity, 0);
    //     setCartCount(newCartCount);
    // }, [cartItems])

    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity*cartItem.price, 0);
    //     setCartTotal(newCartTotal);
    // }, [cartItems])

    // using reducer
    // destructuring cartItems and out from state
    const [{cartItems, cartCount, cartTotal, isCartOpen},dispatch] = useReducer(cartReducer,INITIAL_STATE);


    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        /**
         * generate newCartTotal
         * 
         * generate newCartCount
         * 
         * dispatch new action with payloaod = {
         *  newCartItems,
         *  newCartTotal,
         *  new CartCount
         * }
         */
        dispatch({
            type: 'SET_CART_ITEMS', payload: {
                cartCount: newCartCount,
                cartTotal: newCartTotal,
                cartItems: newCartItems
            }

        })
    }

 

    const addItemToCart = (productToAdd) => {
       const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);

    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems= removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);

    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems= clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }
 

    const value = { isCartOpen, setIsCartOpen:()=>{}, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart , cartTotal};
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}



