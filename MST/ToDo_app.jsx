import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todo, input]);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos(todo.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Todo App</h2>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        {todo.map((todo, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            {todo}{" "}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App
