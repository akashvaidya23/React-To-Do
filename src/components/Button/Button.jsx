const Button = (props) => {
    return (
        <button onClick={props.btnClickHandler}>{props.btnText}</button>
    );
}

export default Button;