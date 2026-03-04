import { Request, Response } from "express";
import { TaskService } from "./task.service.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";

const createTask = catchAsync(async (req, res) => {
  const result = await TaskService.createTask(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Task created successfully",
    data: result,
  });
});

const getAllTasks = catchAsync(async (req, res) => {
  const { projectId } = req.query;

  const result = await TaskService.getAllTasks(projectId as string);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tasks retrieved successfully",
    data: result,
  });
});

const updateTaskStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const result = await TaskService.updateTaskStatus(
    id as string,
    status as string,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Task status updated successfully",
    data: result,
  });
});

export const TaskController = {
  createTask,
  getAllTasks,
  updateTaskStatus,
};
