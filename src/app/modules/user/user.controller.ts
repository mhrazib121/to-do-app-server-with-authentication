import { Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.services";
import { catchAsync, sendResponse } from "../../../utils";
import httpStatus from "http-status";
import config from "../../../config";
import { ILoginUserResponse, IRefreshTokenResponse } from "./user.interface";

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
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await UserServices.loginUser(loginData);
  const { refreshToken, ...others } = result;

  const cookiesOption = {
    secure: config.env === "production" ? true : false,
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookiesOption);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully !",
    data: others,
  });
  // next();
});
const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const result = await UserServices.refreshToken(refreshToken);

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: "New access token generated successfully !",
    data: result,
  });
});

export const UserController = {
  userSignup,
  loginUser,
  refreshToken,
};
