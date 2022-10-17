import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import { UserContext } from "../../context/user.context";
import { SignOutUser } from "../../util/firebase/firebase.utils";
import {CartContext } from '../../context/cart.context'
import './navigation.styles.scss'

const Navigation = () => {
    const {currentUser  } = useContext(UserContext);
    // console.log(currentUser);
    const {isCartOpen} = useContext(CartContext);

    return (
        <Fragment>{/**A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. */}
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>
                            ) : (<Link className="nav-link" to='/auth'>
                                SIGN IN
                                </Link>)
                    }
                    <CartIcon/>
                </div>
                {isCartOpen && <CartDropdown />}  {/**both should be true, if the total statement is true it will return the last item we gave it */} 
            </div>
            <Outlet /> {/**Like Home and shop to be displayed here*/}
        </Fragment>
    );
};

export default Navigation;
