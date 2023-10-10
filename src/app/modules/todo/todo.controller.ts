import { Request, Response } from "express";
import { catchAsync, sendResponse } from "../../../utils";
import { TodoServices } from "./todo.services";

const createTodo = catchAsync(async (req: Request, res: Response) => {
  const result = await TodoServices.createTodo(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "New access token generated successfully !",
    data: result,
  });
});

export const TodoControllers = {
  createTodo,
};
