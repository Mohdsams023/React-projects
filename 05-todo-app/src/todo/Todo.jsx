import React, { useState, useEffect } from 'react';
import AddTodos from './AddTodos';
import MyTodo from './MyTodo';

function Todo() {
    // Load todos from localStorage or initialize an empty array
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    function handleAddTodo(newTodo) {
        newTodo.id = todos.length + 1;
        setTodos([...todos, newTodo]);
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    function handleStatusTodo(id) {
        setTodos((todos) =>
            todos.map((todo) => (todo.id === id ? { ...todo, status: !todo.status } : todo))
        );
    }

    return (
        <>
            <AddTodos onAddTodo={handleAddTodo} />
            <MyTodo todos={todos} onDeleteTodo={handleDeleteTodo} onUpdateTodo={handleStatusTodo} />
        </>
    );
}

export default Todo;
