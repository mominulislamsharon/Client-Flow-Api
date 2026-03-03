import { Request, Response } from "express";
import { TaskService } from "./task.service.js";

interface TaskParams {
  id: string;
}

const createTask = async (req: Request, res: Response) => {
  const result = await TaskService.createTask(req.body);

  res.status(201).json({
    success: true,
    data: result,
  });
};

const getAllTasks = async (req: Request, res: Response) => {
  const { projectId } = req.query;

  const result = await TaskService.getAllTasks(projectId as string);

  res.status(200).json({
    success: true,
    data: result,
  });
};

const updateTaskStatus = async (req: Request<TaskParams>, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const result = await TaskService.updateTaskStatus(id, status);

  res.status(200).json({
    success: true,
    data: result,
  });
};

export const TaskController = {
  createTask,
  getAllTasks,
  updateTaskStatus,
}
