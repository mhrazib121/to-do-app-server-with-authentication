import { Schema, model } from "mongoose";
import { ITodo, TodoModel } from "./todo.interface";

const todoSchema = new Schema<ITodo, TodoModel>(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
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

export const Todo = model<ITodo>("Todo", todoSchema);
