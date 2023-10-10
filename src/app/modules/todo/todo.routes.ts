import express from "express";
import { TodoControllers } from "./todo.controller";
const router = express.Router();

router.post("/", TodoControllers.createTodo);

export const TodoRouters = router;
