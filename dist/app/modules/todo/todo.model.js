"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    // _id: {
    //   type: String,
    // },
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
    deadline: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
const todoListSchema = new mongoose_1.Schema({
    email: {
        type: String,
        require: true,
    },
    todos: {
        type: [todoSchema],
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.TodoList = (0, mongoose_1.model)("TodoList", todoListSchema);
