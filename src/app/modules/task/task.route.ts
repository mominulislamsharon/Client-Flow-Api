import express from "express";
import { TaskController } from "./task.controller.js";

const router = express.Router();

router.post("/", TaskController.createTask);
router.get("/", TaskController.getAllTasks);
router.patch("/:id/status", TaskController.updateTaskStatus);

export const TaskRoutes = router;
