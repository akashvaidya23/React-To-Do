import Input from "../Input/Input";
import Button from "../Button/Button";
import List from "../List/List";

const TodoList = () => {
    const list = ['l1', 'l2', 'l3', 4];
    return (
        <>
            <Input />
            <Button btnText="Add to List" btnClickHandler={() => { console.log('clicked') }} />
            <List list={list} />
        </>

    )
};

export default TodoList;