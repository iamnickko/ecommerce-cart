import classes from './Button.module.css';

const Button = (props) => {
    const { children, onClick } = props
    const buttonClasses = `${classes.button} ${props.className}`
    return (
        <button className={buttonClasses} onClick={onClick}>{children}</button>
    );
};

export default Button;