
const Form = ({ setInputText, inputText, setStatus, refetchTodos }) => {

  const inputTexthandler = (e) => {
    setInputText(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    await fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: inputText }),
    });

    setInputText("");
    refetchTodos(); 
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTexthandler}
        type="text"
        className="todo-input"
      />

      <button onClick={SubmitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
