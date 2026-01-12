import express from "express";
import {
  getTodos,
  createTodos,
  updateTodo,
  deleteTodo,
  filterStatus
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodos);
router.get("/filter", filterStatus);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;

