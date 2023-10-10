import { RequestHandler } from "express";
import { UserServices } from "./user.services";
import { sendResponse } from "../../../utils";
import httpStatus from "http-status";

const userSignup: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UserServices.userSignUp(user);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User create successfully !",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  userSignup,
};
