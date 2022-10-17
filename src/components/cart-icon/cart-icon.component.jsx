import React from 'react'
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';
import './cart-icon.styles.scss'

const CartIcon = () => {

    const {isCartOpen,setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); // toggling the value of the cart open or close
   
    return(
        <div className='cart-icon' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {cartCount}
        </span>
    </div>
    );
};
export default CartIcon;
/*
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon)
*/