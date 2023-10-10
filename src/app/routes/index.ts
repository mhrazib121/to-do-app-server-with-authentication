import express from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { TodoRouters } from "../modules/todo/todo.routes";

const router = express.Router();

const modules = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/todos",
    route: TodoRouters,
  },
];

modules.forEach(route => router.use(route.path, route.route));

export default router;
