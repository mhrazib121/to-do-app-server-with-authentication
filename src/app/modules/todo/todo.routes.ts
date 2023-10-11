import express from "express";
import { TodoControllers } from "./todo.controller";
const router = express.Router();

router.get("/", TodoControllers.getTodos);
router.post("/create-todo", TodoControllers.createTodo);
router.patch("/update-todo", TodoControllers.updateTodo);

export const TodoRouters = router;
