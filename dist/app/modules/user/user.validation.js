"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: "First Name is required",
            }),
            lastName: zod_1.z.string({
                required_error: "Last name is required",
            }),
        }),
    }),
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: "Refresh Token is required",
        }),
    }),
});
const loginUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "Email is required",
        }),
        password: zod_1.z.string({
            required_error: "Password is required",
        }),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    refreshTokenZodSchema,
    loginUserZodSchema,
};
