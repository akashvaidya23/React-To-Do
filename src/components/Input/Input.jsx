const Input = (props) => {
    return (
        <input type="text" onChange={props.InputChangeHandler} value={props.value} onKeyUp={props.inputKeyChangeHandler} />
    );
}

export default Input;

