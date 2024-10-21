import React, { useState } from 'react';

function Todo() {
  const [input, setInput] = useState(''); 
  const [todos, setTodos] = useState([]); 

  const handleDelete = (index) => {
    const newTodos = [...todos]; 
    newTodos.splice(index, 1); 
    setTodos(newTodos);
  };

  const handleChange = (event) => {
    setInput(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (!input) return; 

    setTodos([...todos, input]); 
    setInput(''); 
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          value={input}
          onChange={handleChange} 
          placeholder="Enter your todo"
        />
        <button type="submit">Add</button> 
      </form>

      <ul>
        {todos.map((todo, index) => ( 
          <li key={index}>
            {todo} {/* Display the todo item */}
            <button onClick={() => handleDelete(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
