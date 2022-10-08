import './button-component.styles.scss';

/*
default button style

inverted


google sing in


*/

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};


const Button = ({ children, buttonType , ...otherProps }) => {
    return (
        <button className={`button-container  ${BUTTON_TYPES_CLASSES[buttonType]}`}
        {...otherProps}
        >
            {children}
        </button>
    )
};
export default Button;