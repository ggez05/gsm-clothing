import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} item={item} />)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>

            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;