import "./ToDo.css"

function ToDo({todo,toggleTask,removeTask}){

    return(
        <div key={todo.id} className="item-todo" >
            <div className={todo.complete ? "strike":"item-text"} onClick={()=>toggleTask(todo.id)} >
                <span id="todo_task">{todo.task}</span>
            </div>
            <div className="iteme-delete" onClick={()=>removeTask(todo.id)} ><button id="button_X">X</button></div>
        </div>
    )
}
export default ToDo