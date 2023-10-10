import { Model } from "mongoose";

export type ITodo = {
  id?: string;
  title: string;
  status: string;
  deadline: string;
};

export type TodoModel = Model<ITodo>;
