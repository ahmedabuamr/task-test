import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

import { Todo } from "./models/models";

const Home: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [error, setError] = useState({})

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };


    const id = localStorage.getItem("item")
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(res => setTodos(res.slice(0, 10)))
            .catch(err => setError(err))
    }, [])
    return (

        <div className="App">
            <div style={{maxWidth:"800px", margin:"auto", marginTop:"30px"}}>
                <span style={{fontSize:"24px"}}>Create new post..</span>
                <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}

                />
            </div>

        </div>

    );
};

export default Home;
