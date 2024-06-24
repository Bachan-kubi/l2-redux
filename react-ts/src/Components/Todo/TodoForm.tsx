import { useContext } from "react";
import { TodoContext } from "../../Context/TodoProvider";


const TodoForm = () => {
    const {todoTitle} = useContext(TodoContext);
    console.log(todoTitle)
    return (
        <div>
            <h1>{todoTitle}</h1>
            <h3>Todo Form</h3>
        </div>
    );
};

export default TodoForm;