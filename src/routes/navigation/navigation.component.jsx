import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
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
                    <Link className="nav-link" to='/sign-in'>
                        SignIn
                    </Link>
                </div>
            </div>
            <Outlet /> {/**Like Home and shop to be displayed here*/}
        </Fragment>
    );
};

export default Navigation;
