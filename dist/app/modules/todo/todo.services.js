"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoServices = void 0;
const todo_model_1 = require("./todo.model");
const createTodo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const findUserTodoList = yield todo_model_1.TodoList.findOne({ email: payload.email });
    if (findUserTodoList) {
        findUserTodoList.todos.push(payload.todos);
        findUserTodoList.save();
        return findUserTodoList;
    }
    else {
        const insertDataToDoc = yield todo_model_1.TodoList.create(payload);
        return insertDataToDoc;
    }
});
const updateTodo = (query, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const findUserTodoList = yield todo_model_1.TodoList.findOne({ email: query.email });
    if (findUserTodoList) {
        const findTask = findUserTodoList.todos.find(p => p._id == payload.id);
        if (findTask) {
            findTask.isCompleted = payload.status;
        }
        else {
            throw new Error("Task not found");
        }
    }
    else {
        throw new Error("There have no task for this user");
    }
    findUserTodoList === null || findUserTodoList === void 0 ? void 0 : findUserTodoList.save();
    return findUserTodoList;
});
const getTodos = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const findUserTodoList = yield todo_model_1.TodoList.findOne({ email: query.email });
    if (findUserTodoList) {
        return findUserTodoList;
    }
    else {
        throw new Error("There have no task for this user");
    }
});
exports.TodoServices = { createTodo, updateTodo, getTodos };
