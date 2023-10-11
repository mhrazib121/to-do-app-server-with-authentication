import { Schema, model } from "mongoose";
import { ITodo, ITodoList, TodoListModel, TodoModel } from "./todo.interface";

const todoSchema = new Schema<ITodo, TodoModel>(
  {
    // _id: {
    //   type: String,
    // },
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
    deadline: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const todoListSchema = new Schema<ITodoList, TodoListModel>(
  {
    email: {
      type: String,
      require: true,
    },
    todos: {
      type: [todoSchema],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const TodoList = model<ITodoList, TodoListModel>(
  "TodoList",
  todoListSchema
);
