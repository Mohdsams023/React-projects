function MyTodo({ todos, onDeleteTodo, onUpdateTodo }) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-lg sm:text-xl text-center font-medium text-gray-500 uppercase tracking-wider">Todo</th>
                        <th scope="col" className="px-6 py-3 text-lg sm:text-xl text-center font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-lg sm:text-xl text-center font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-lg sm:text-xl text-center font-medium text-gray-500 uppercase tracking-wider">Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td className={todo.status ? "line-through px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-center" : "px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-center"}>{todo.formTodo}</td>
                            <td className={todo.status ? "line-through px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-center" : "px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-center"}>{todo.formDate}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-center"><input checked={todo.status} onChange={() => onUpdateTodo(todo.id)} type="checkbox" /></td>
                            <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-center"><button onClick={() => onDeleteTodo(todo.id)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
} 

export default MyTodo;
