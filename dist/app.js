"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// cors use
app.use((0, cors_1.default)());
// use cookies parser
app.use((0, cookie_parser_1.default)());
// Parsing data
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
