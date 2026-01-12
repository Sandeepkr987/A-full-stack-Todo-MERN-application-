import './App.css';
import React, { useState, useEffect } from 'react';

import Form from './Components/From';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const refetchTodos = () => {
    fetch(`http://localhost:5000/api/todos/filter?status=${status}`)
      .then(res => res.json())
      .then(data => setFilteredTodos(data));
  };

  useEffect(() => {
    refetchTodos();
  }, [status]);

  return (
    <div className='App'>
  <header><h3>My Todo List !</h3></header>

      <Form
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        refetchTodos={refetchTodos}
      />

      <TodoList
        filteredTodos={filteredTodos}
        refetchTodos={refetchTodos}
      />
</div>
      
  );
}

export default App;
