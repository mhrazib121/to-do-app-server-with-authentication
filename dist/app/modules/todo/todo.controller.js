"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoControllers = void 0;
const utils_1 = require("../../../utils");
const todo_services_1 = require("./todo.services");
const createTodo = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield todo_services_1.TodoServices.createTodo(req.body);
    (0, utils_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "New access token generated successfully !",
        data: result,
    });
}));
exports.TodoControllers = {
    createTodo,
};