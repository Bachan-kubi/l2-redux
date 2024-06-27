import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoProvider";


const TodoForm = () => {
    const { state, dispatch} = useContext(TodoContext);
    console.log(state, 'todoState');
    const [task, setTask] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const todo = {
            id: Math.floor(Math.random() * (1000 - 1)) + 1,
            title: "task",
            isCompleted: false
        }
        dispatch({type: "addTodo", payload: todo})
    }
    return (
        <div>
            <h1>Add ToDo</h1>
            <form>
                <label htmlFor="todo">Task</label>
                <input type="text" id="todo" name="todo" onBlur={(e)=>setTask(e.target.value)}/>
                <button onClick={handleSubmit} type="submit">Add</button>
            </form>
        </div>
    );
};

export default TodoForm;