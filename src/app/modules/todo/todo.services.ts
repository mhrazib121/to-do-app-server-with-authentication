import { ITodo } from "./todo.interface";
import { Todo } from "./todo.model";

const createTodo = async (payload: ITodo) => {
  const insertDataToDoc = await Todo.create(payload);
  return insertDataToDoc;
};

export const TodoServices = { createTodo };
