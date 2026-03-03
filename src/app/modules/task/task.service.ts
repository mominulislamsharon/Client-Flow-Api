import { ITask } from "./task.interface.js";
import { Task } from "./task.model.js";

const createTask = async (payload: ITask) => {
  const result = await Task.create(payload);
  return result;
};

const getAllTasks = async (projectId?: string) => {
  const filter: any = {};

  if (projectId) {
    filter.project = projectId;
  }

  const result = await Task.find(filter).populate({
    path: "project",
    populate: {
      path: "client",
    },
  });
  return result;
};

const updateTaskStatus = async (id: string, status: string) => {
  const result = await Task.findByIdAndUpdate(id, { status }, { new: true });
  return result;
};

export const TaskService = {
  createTask,
  getAllTasks,
  updateTaskStatus,
};
