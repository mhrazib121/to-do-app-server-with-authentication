import express from "express";
import { UserRoutes } from "../modules/user/user.routes";

const router = express.Router();

const modules = [
  {
    path: "/users",
    route: UserRoutes,
  },
];

modules.forEach(route => router.use(route.path, route.route));

export default router;
