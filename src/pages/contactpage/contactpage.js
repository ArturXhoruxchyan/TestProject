import React, { useState, useEffect } from "react";
import "./contactpage.css";
import ToDoForm from "../../components/ToDoForm.js/ToDoForm";
import ToDo from "../../components/ToDo/ToDo";


const Contact = () => {
    const [todos, setTodos] = useState([]);

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(30).substr(2, 9),
                task: userInput,
                complete: true,

            };
            setTodos([...todos, newItem])
            console.log(newItem);
        }
    };
    console.log(todos);
    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })
        ])
    }
    return (
        <div id="contactpage">
            <div>
                <h1>Cank:{todos.length}</h1>
            </div>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                         />
 

                )
            })}
        </div>
    )
}
export default Contact