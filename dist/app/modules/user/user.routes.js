"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post("/sign-up", (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodSchema), user_controller_1.UserController.userSignup);
router.post("/login", (0, validateRequest_1.default)(user_validation_1.UserValidation.loginUserZodSchema), user_controller_1.UserController.loginUser);
router.post("/refresh-token", (0, validateRequest_1.default)(user_validation_1.UserValidation.refreshTokenZodSchema), user_controller_1.UserController.refreshToken);
router.get("/get-profile", user_controller_1.UserController.getMyProfile);
exports.UserRoutes = router;
