import styles from './List.module.css';
const List = (props) => {

    // const list = props.list; normal syntax
    const { list } = props; // ES6 syntax

    const listItems = list.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        );
    });

    return (
        <div className={styles.listContainer} >
            <ul>
                {listItems}
            </ul>
        </div>

    );
};

export default List;