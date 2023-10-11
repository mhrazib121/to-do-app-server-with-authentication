"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRouters = void 0;
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("./todo.controller");
const router = express_1.default.Router();
router.post("/create-todo", todo_controller_1.TodoControllers.createTodo);
router.patch("/update-todo", todo_controller_1.TodoControllers.updateTodo);
exports.TodoRouters = router;
