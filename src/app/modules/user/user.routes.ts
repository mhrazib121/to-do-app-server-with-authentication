import express from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/sign-up",
  validateRequest(UserValidation.createUserZodSchema),
  UserController.userSignup
);
router.post(
  "/login",
  validateRequest(UserValidation.loginUserZodSchema),
  UserController.loginUser
);

router.post(
  "/refresh-token",
  validateRequest(UserValidation.refreshTokenZodSchema),
  UserController.refreshToken
);
router.get("/get-profile", UserController.getMyProfile);

export const UserRoutes = router;
