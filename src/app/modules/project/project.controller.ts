import { Request, Response } from "express";
import { ProjectService } from "./project.service.js";
import { Project } from "./project.model.js";

// helper type for route params
interface ProjectParams {
  id: string;
}

const createProject = async (req: Request, res: Response) => {
  const result = await ProjectService.createProject(req.body);
  res.status(201).json({
    success: true,
    data: result,
  });
};

const getAllProjects = async (req: Request, res: Response) => {
  const { status } = req.query;

  const result = await ProjectService.getAllProjects(status as string);

  res.status(200).json({
    success: true,
    data: result,
  });
};

const getSingleProject = async (req: Request<ProjectParams>, res: Response) => {
  const { id } = req.params;
  const result = await ProjectService.getSingleProject(id);

  res.status(200).json({
    success: true,
    data: result,
  });
};

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
};
