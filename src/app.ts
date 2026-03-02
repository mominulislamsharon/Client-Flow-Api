import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Clientflow API is running..");
});

export default app;
