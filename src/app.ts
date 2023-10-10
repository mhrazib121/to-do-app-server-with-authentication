import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
const app: Application = express();

// cors use
app.use(cors());

// use cookies parser
app.use(cookieParser());

// Parsing data
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
