import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../contexts';

function useStateWithLocalStorage(key) {
    const [state, setState] = useState(JSON.parse(localStorage.getItem(key)) || []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
}

function useWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return width;
}

export default function TodoList() {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useStateWithLocalStorage('todos');
    const width = useWidth();

    useEffect(() => {
        document.title = `${todos.length} items to do`;
    }, [todos])

    const theme = useContext(ThemeContext);
    
    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setInput("");
        setTodos((prev) => [ input, ...prev ]);
    }

    function handleClear(index) {
        var array = [...todos];
        array.splice(index, 1);
        setTodos(array);
    }

    return <div className={theme}>
        <h2>Todo List</h2>
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
        <ul>
            <li>{width}</li>
            {
                todos.map((todo, index) => (
                    <li key={index} onClick={() => handleClear(index)}>{todo}</li>
                ))
            }
        </ul>
    </div>
}