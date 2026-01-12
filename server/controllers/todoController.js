import todoModel from "../models/todoModel.js";

// GET
export const getTodos = async (req, res) => {
  const todos = await todoModel.find().sort({ createdAt: -1 });
  res.json(todos);
};

// CREATE
export const createTodos = async (req, res) => {
  const todo = await todoModel.create({
    text: req.body.text,
    completed: false,
  });

  res.status(201).json(todo);
};

// TOGGLE COMPLETE
export const updateTodo = async (req, res) => {
  const todo = await todoModel.findById(req.params.id);

  if (!todo) return res.status(404).json({ message: "Todo not found" });

  todo.completed = !todo.completed;
  await todo.save();

  res.json(todo);
};

// FILTER (🔥 FIXED)
export const filterStatus = async (req, res) => {
  const { status } = req.query;

  if (status === "all") {
    const todos = await todoModel.find().sort({ createdAt: -1 });
    return res.json(todos);
  }

  if (status === "completed") {
    const todos = await todoModel.find({ completed: true }).sort({ createdAt: -1 });
    return res.json(todos);
  }

  if (status === "uncompleted") {
    const todos = await todoModel.find({ completed: false }).sort({ createdAt: -1 });
    return res.json(todos);
  }

  res.status(400).json({ message: "Invalid status" });
};

// DELETE
export const deleteTodo = async (req, res) => {
  await todoModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};
