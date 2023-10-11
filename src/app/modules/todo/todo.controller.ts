import { Request, Response } from "express";
import { catchAsync, sendResponse } from "../../../utils";
import { TodoServices } from "./todo.services";

const createTodo = catchAsync(async (req: Request, res: Response) => {
  const result = await TodoServices.createTodo(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Task added successfully !",
    data: result,
  });
});
const updateTodo = catchAsync(async (req: Request, res: Response) => {
  const result = await TodoServices.updateTodo(req.query, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: " Task status updated successfully !",
    data: result,
  });
});
const getTodos = catchAsync(async (req: Request, res: Response) => {
  const result = await TodoServices.getTodos(req.query);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: " Task status updated successfully !",
    data: result,
  });
});

export const TodoControllers = {
  createTodo,
  updateTodo,
  getTodos,
};
