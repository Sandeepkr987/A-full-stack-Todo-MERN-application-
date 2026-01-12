import Todo from './Todo';

const TodoList = ({ filteredTodos, refetchTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            key={todo._id}
            todo={todo}
            refetchTodos={refetchTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
