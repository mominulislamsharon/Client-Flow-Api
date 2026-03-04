import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/index.js";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Clientflow API is running..");
});

app.use(globalErrorHandler);

export default app;
