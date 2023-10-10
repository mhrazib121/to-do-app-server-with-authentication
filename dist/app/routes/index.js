"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/user/user.routes");
const todo_routes_1 = require("../modules/todo/todo.routes");
const router = express_1.default.Router();
const modules = [
    {
        path: "/users",
        route: user_routes_1.UserRoutes,
    },
    {
        path: "/todos",
        route: todo_routes_1.TodoRouters,
    },
];
modules.forEach(route => router.use(route.path, route.route));
exports.default = router;
