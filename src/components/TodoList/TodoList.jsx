import Input from "../Input/Input";
import Button from "../Button/Button";
import List from "../List/List";
import { useState } from "react";

const TodoList = () => {
    const [list, setList] = useState([]);

    const [inputText, setInputText] = useState('');

    const addTodoListHandler = () => {
        if (inputText.trim()) {
            const items = [...list];
            items.push(inputText);
            setList(items);
        }
        setInputText('');
    };

    return (
        <>
            <Input InputChangeHandler={(e) => {
                const value = e.target.value;
                setInputText(value);
            }}
                value={inputText}
                inputKeyChangeHandler={(e) => {
                    const keycode = e.keyCode;
                    if (keycode === 13) {
                        addTodoListHandler();
                    }
                }} />

            <Button btnText="Add to List" btnClickHandler={
                addTodoListHandler
            } />
            <List list={list} />
        </>

    )
};

export default TodoList;