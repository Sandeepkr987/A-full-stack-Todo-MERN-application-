import React from 'react';

const Todo = ({ todo, refetchTodos }) => {

  const deleteHandler = async () => {
    await fetch(
      `http://localhost:5000/api/todos/${todo._id}`,
      { method: "DELETE" }
    );
    refetchTodos();
  };

  const completeHandler = async () => {
    await fetch(
      `http://localhost:5000/api/todos/${todo._id}`,
      { method: "PATCH" }
    );
    refetchTodos();
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>

      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
