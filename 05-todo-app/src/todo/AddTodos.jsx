import React, { useState } from 'react';

function AddTodos({ onAddTodo }) {
    const [formTodo, setFormTodo] = useState("");
    const [formDate, setFormDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = { formTodo, formDate, status: false };
        onAddTodo(newTodo);
        setFormTodo("");
        setFormDate("");
    }

    return (
        <div className="flex justify-center items-start p-10">
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5 md:gap-16 md:flex-row justify-between items-center'>
                <input value={formTodo} onChange={(e) => setFormTodo(e.target.value)} className='p-2 border w-full flex-1' type="text" placeholder='Write Todos....' />
                <input value={formDate} onChange={(e) => setFormDate(e.target.value)} className='p-2 border w-full flex-1' type="date" />
                <button type="submit" className='p-2 px-4 w-full flex-1 bg-green-600 text-white font-bold'>Add Todo</button>
            </form>
        </div>
    );
} 

export default AddTodos;
