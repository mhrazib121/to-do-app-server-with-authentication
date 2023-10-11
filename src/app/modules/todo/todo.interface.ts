import { Model } from "mongoose";

export type ITodo = {
  _id?: string;
  title: string;
  isCompleted: boolean;
  deadline: string;
};

export type ITodoList = {
  email: string;
  todos: ITodo[];
};

export type TodoModel = Model<ITodo>;
export type TodoListModel = Model<ITodoList>;
