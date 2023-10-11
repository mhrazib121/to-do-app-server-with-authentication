import { ITodo } from "./todo.interface";
import { TodoList } from "./todo.model";

const createTodo = async (payload: { email: string; todos: ITodo }) => {
  const findUserTodoList = await TodoList.findOne({ email: payload.email });
  if (findUserTodoList) {
    findUserTodoList.todos.push(payload.todos);
    findUserTodoList.save();
    return findUserTodoList;
  } else {
    const insertDataToDoc = await TodoList.create(payload);
    return insertDataToDoc;
  }
};
const updateTodo = async (
  query: { email?: string },
  payload: { id: string; status: boolean }
) => {
  const findUserTodoList = await TodoList.findOne({ email: query.email });
  if (findUserTodoList) {
    const findTask = findUserTodoList.todos.find(p => p._id == payload.id);
    if (findTask) {
      findTask.isCompleted = payload.status;
    } else {
      throw new Error("Task not found");
    }
  } else {
    throw new Error("There have no task for this user");
  }
  findUserTodoList?.save();
  return findUserTodoList;
};
const getTodos = async (query: { email?: string }) => {
  const findUserTodoList = await TodoList.findOne({ email: query.email });
  if (findUserTodoList) {
    return findUserTodoList;
  } else {
    throw new Error("There have no task for this user");
  }
};

export const TodoServices = { createTodo, updateTodo, getTodos };
